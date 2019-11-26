import React from "react";
import Layout from "../layout/Layout";
import PageLoader from "../layout/PageLoader";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {api} from "../../api/Api";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class ListFiles extends React.Component {

    state = {
        files: undefined,
        loader: false
    };

    constructor(props) {
        super(props);
        api.list("root").then(response => {
            this.setState({files: response.files})
        });
    }

    view = (fileId) => {
       const {view} = this.props;
       view(fileId);
    };

    search = (value) => {
        if(value !== ''){
            api.filter("root",value).then(response => {
                                 this.setState({files: response.files})
                             });
         } else {
         api.list("root").then(response => {
                     this.setState({files: response.files})
                 });
         }
        };

    render() {
        const {files, loader} = this.state;
        return (
            <Layout headerTitle="Coding Test"
                    email="revevol.com">

                <PageLoader visible={loader}/>
                <div className="container-grid overflow bottom-padding ">

                    <Paper>
                        <div className="title">Files in Drive</div>
                        <TextField
                            id="outlined-basic"
                            label="File search"
                            margin="normal"
                            variant="outlined"
                            onChange={(event) => this.search(event.target.value)}
                        />
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Kind</TableCell>
                                    <TableCell>MimeType</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {files && files.map(file => (
                                    <TableRow key={file.id}>
                                        <TableCell>{file.id}</TableCell>
                                        <TableCell>{file.name}</TableCell>
                                        <TableCell>{file.kind}</TableCell>
                                        <TableCell>{file.mimeType}</TableCell>
                                        <TableCell>
                                            <Button variant="contained"
                                                    onClick={() => this.view(file.id)}>
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>

                </div>
            </Layout>
        );

    }
}

export default ListFiles;
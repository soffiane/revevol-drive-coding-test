import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { Component, Fragment } from "react";
import { api } from "../../api/Api";
import Layout from "../layout/Layout";
import PageLoader from "../layout/PageLoader";

class ListFiles extends Component {

    state = {
        file: undefined,
        loader: true
    }

    constructor(props) {
        super(props);
        // API Get File by ID
        api.find(props.fileId).then(response => this.setState({file: response}))
    }

    componentDidMount() {
        
    }
  
    componentWillUnmount() {
    }


    render() {
        const { loader, file } = this.state;
        const { fileId, back } = this.props;
        return (
            <Layout headerTitle="Coding Test"
                email="revevol.com">

                <PageLoader visible={loader} />
                <div className="container-grid overflow bottom-padding ">
                    <Paper>
                        <div className="title">View file {fileId}</div>
                        <Button variant="contained"
                            onClick={() => back()}>
                            Back
                        </Button>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Kind</TableCell>
                                    <TableCell>MimeType</TableCell>
                                    <TableCell>Starred</TableCell>
                                    <TableCell>Owners Kind</TableCell>
                                    <TableCell>Owners displayName</TableCell>
                                    <TableCell>Owners me</TableCell>
                                    <TableCell>Owners permissionId</TableCell>
                                    <TableCell>Owners emailAdress</TableCell>
                                    <TableCell>Permissions kind</TableCell>
                                    <TableCell>Permissions id</TableCell>
                                    <TableCell>Permissions type</TableCell>
                                    <TableCell>Permissions mail</TableCell>
                                    <TableCell>Permissions role</TableCell>
                                    <TableCell>Permissions displayName</TableCell>
                                    <TableCell>Permissions deleted</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{file && file.id}</TableCell>
                                    <TableCell>{file && file.name}</TableCell>
                                    <TableCell>{file && file.kind}</TableCell>
                                    <TableCell>{file && file.mimeType}</TableCell>
                                    <TableCell>{file && file.starred.toString()}</TableCell>
                                    
                                    {file && file.owners.map((owners,i) => (
                                    <Fragment key={i}>
                                    <TableCell>{owners.kind}</TableCell>
                                    <TableCell>{owners.displayName}</TableCell>
                                    <TableCell>{owners.me.toString()}</TableCell>
                                    <TableCell>{owners.permissionId}</TableCell>
                                    <TableCell>{owners.emailAddress}</TableCell>
                                    </Fragment>
                                    ))}
                                   
                                    {file && file.permissions.map( (permissions,i) => (
                                    <Fragment key={i}>
                                    <TableCell>{permissions.kind}</TableCell>
                                    <TableCell>{permissions.id}</TableCell>
                                    <TableCell>{permissions.type}</TableCell>
                                    <TableCell>{permissions.emailAddress}</TableCell>
                                    <TableCell>{permissions.role}</TableCell>
                                    <TableCell>{permissions.displayName}</TableCell>
                                    <TableCell>{permissions.deleted.toString()}</TableCell>
                                    </Fragment>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </Layout>
        );

    }
}

export default ListFiles;
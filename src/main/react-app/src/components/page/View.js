import React from "react";
import Layout from "../layout/Layout";
import PageLoader from "../layout/PageLoader";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

class ListFiles extends React.Component {

    state = {
        fileId: undefined,
        loader: false
    };

    constructor(props) {
        super(props);
        // API Get File by ID
    }

    render() {
        const {loader} = this.state;
        const {fileId, back} = this.props;
        return (
            <Layout headerTitle="Coding Test"
                    email="revevol.com">

                <PageLoader visible={loader}/>
                <div className="container-grid overflow bottom-padding ">
                    <Paper>
                        <div className="title">View file {fileId}</div>
                        <Button variant="contained"
                                onClick={() => back()}>
                            Back
                        </Button>
                    </Paper>
                </div>
            </Layout>
        );

    }
}

export default ListFiles;
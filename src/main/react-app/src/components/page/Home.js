import React, {Component} from "react";
import ListFiles from "./ListFiles";
import View from "./View";

export const INITIAL_STATE = {
    page: "LIST",
    fileId: undefined
};

export default class Home extends Component {

    state = INITIAL_STATE;

    render() {
        return this.router();
    }

    router = () => {
        const {page, fileId} = this.state;
        if (page === "LIST") {
            return <ListFiles view={(fileId) => this.setState({page: "VIEW", fileId: fileId})}/>;
        } else if (page === "VIEW") {
            return <View back={() => this.setState({page: "LIST"})} fileId={fileId}/>;
        } else {
            return <span>Error</span>;
        }
    }

}




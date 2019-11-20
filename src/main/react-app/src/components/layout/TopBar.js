import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Image from "./Image";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    appBar: {
        height: 65
    }
});

function TopBar({classes, headerTitle, logout, email}) {
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar className="toolbar">
                <Image className="brand-logo"
                       name="Cabinet Office"
                       src="images/logo.png"/>

                <span>{headerTitle}</span>

                <div className="bar-info-right">
                    {email && <span>{email}</span>}
                    {logout && <div className="logout" onClick={logout}>Logout</div>}
                </div>

            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(TopBar);
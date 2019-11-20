import React from "react";
import TopBar from "./TopBar";

const Layout = ({children, headerTitle, logout, email}) => (
    <React.Fragment>
        <TopBar headerTitle={headerTitle} logout={logout} email={email}/>
        {children}
    </React.Fragment>
);

export default Layout;
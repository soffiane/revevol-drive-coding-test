import React from "react";

function Header({header}) {
    return (
        <div className="bar-header">
            <span>{header}</span>
        </div>
    )
}

export default Header;
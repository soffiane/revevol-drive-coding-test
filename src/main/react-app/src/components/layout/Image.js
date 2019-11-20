import React from "react";

const Image = ({className, src, name}) => (
    <div className={className}>
        <img src={src} alt={name}/>
    </div>
);

export default Image;
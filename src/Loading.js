// Loading.js
import React from "react";

const Loading = ({ loadingDots }) => {
    return ( <
        div className = "loading-container" >
        <
        img src = "/images/logo.png"
        alt = "Loading"
        className = "loading-logo" /
        >
        <
        div className = "loading-message" > Loading { loadingDots } < /div> < /
        div >
    );
};

export default Loading;
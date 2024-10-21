// ConnectWallet.js
import React from "react";

const ConnectWallet = () => {
    return ( <
        button className = "connect-wallet" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "16"
        height = "16"
        viewBox = "0 0 12 12"
        className = "wallet-icon"
        style = {
            { marginRight: "5px" }
        } >
        <
        path fillRule = "evenodd"
        clipRule = "evenodd"
        d = "M2 1C0.895386 1 0 1.89551 0 3V9C0 10.1045 0.895386 11 2 11H10C11.1046 11 12 10.1045 12 9V3C12 1.89551 11.1046 1 10 1H2ZM8 4.5C7.17163 4.5 6.5 5.17139 6.5 6C6.5 6.82861 7.17163 7.5 8 7.5H9C9.82837 7.5 10.5 6.82861 10.5 6C10.5 5.17139 9.82837 4.5 9 4.5H8Z"
        className = "wallet-path" /
        >
        <
        /svg>
        Connect Wallet <
        /button>
    );
};

export default ConnectWallet;
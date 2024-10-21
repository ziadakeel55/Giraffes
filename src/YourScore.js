import React from 'react';

const YourScore = () => {
    const svgStyle = {
        width: '95%',
        height: '85',
        borderRadius: '15px',
        marginBottom: '0px',
        animation: 'slideIn 0.5s ease-out forwards',
    };

    const keyframes = `
        @keyframes slideIn {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(0);
            }
        }
    `;

    return ( <
        div style = {
            { position: 'relative' } } >
        <
        style > { keyframes } < /style> <
        svg version = "1.1"
        viewBox = "-352.906 420.127 1048.164 288.388"
        preserveAspectRatio = "none"
        xmlns = "http://www.w3.org/2000/svg"
        style = { svgStyle } >
        <
        desc > Created with Fabric.js 5.2 .4 < /desc> <
        defs >
        <
        clipPath id = "clip" >
        <
        rect x = "-189"
        y = "-42"
        width = "375"
        height = "93" /
        >
        <
        /clipPath> <
        /defs> <
        g transform = "matrix(1 0 0 1 540 540)"
        id = "0923dbca-acdc-4227-8891-b41309b74756" >
        <
        rect style = {
            {
                stroke: 'none',
                strokeWidth: 1,
                fill: 'rgb(0,123,255)',
                opacity: 1,
                visibility: 'hidden'
            }
        }
        vectorEffect = "non-scaling-stroke"
        x = "-540"
        y = "-540"
        width = "1080"
        height = "1080" /
        >
        <
        /g> <
        g transform = "matrix(1 0 0 1 540 540)"
        id = "8c73f02b-ab7d-4280-9749-0be91c51d636" / >
        <
        g transform = "matrix(15.8, 0, 0, 4.26, 169.529083, 566.039978)"
        id = "f2524aaa-ad84-47b3-88d6-49d3e24881d4" >
        <
        rect style = {
            {
                stroke: 'rgb(0,123,255)',
                strokeWidth: 0,
                fill: 'rgb(0,123,255)',
                opacity: 1
            }
        }
        vectorEffect = "non-scaling-stroke"
        x = "-33.0835"
        y = "-33.0835"
        width = "66"
        height = "60" /
        >
        <
        /g> <
        g transform = "matrix(2.79, 0, 0, 2.79, 171.829071, 539.900024)"
        clipPath = "url(#clip)" >
        <
        path style = {
            {
                stroke: 'rgb(19,21,25)',
                strokeWidth: 45,
                fill: 'none',
                opacity: 1
            }
        }
        transform = "translate(-199.11, -20.63)"
        d = "M 39.1733 134.193 C 39.1733 134.193 -2.02686 -1.362 59.4866 -9.431 C 121 -17.5 107.521 85.0967 175.04 70.8748 C 242.558 56.6528 237.82 -90.02 266.035 -92.8974 C 294.251 -95.7747 372.554 81.9009 372.554 81.9009"
        strokeLinecap = "round" /
        >
        <
        /g> <
        /svg> <
        /div>
    );
};

export default YourScore;
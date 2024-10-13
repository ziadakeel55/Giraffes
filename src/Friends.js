// Friends.js
import React from "react";

const Friends = () => {
    // Inline styles for the logo
    const logoStyle = {
        width: "150%", // Scale to 150%
        maxWidth: "300px", // Optional: limit the maximum width
        margin: "20px 0", // Optional: add some margin for spacing
    };

    return ( <
        div className = "friends-page" >
        <
        h1 > Invite friends and get more GIRAFFES < /h1> { /* Add the logo here with inline styles */ } <
        img src = "/images/logo.png"
        alt = "GIRAFFES Logo"
        style = { logoStyle } // Apply the inline styles
        /> <
        p > Friends(0) < /p> <
        /div>
    );
};

export default Friends;
import React, { useState } from "react";
import Referrals from "./Referrals";

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const Friends = () => {
    const [friendsData, setFriendsData] = useState([
        { name: "Friend 1", color: getRandomColor() },
        { name: "Friend 2", color: getRandomColor() },
        { name: "Friend 3", color: getRandomColor() },
        { name: "Friend 4", color: getRandomColor() },
        { name: "Friend 5", color: getRandomColor() },
        { name: "Friend 6", color: getRandomColor() },
        { name: "Friend 7", color: getRandomColor() },
    ]);

    const addFriend = () => {
        const newFriendName = `Friend ${friendsData.length + 1}`;
        const newFriendColor = getRandomColor();
        setFriendsData([
            ...friendsData,
            { name: newFriendName, color: newFriendColor },
        ]);
    };

    const buttonContainerStyle = {
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: "400px",
        margin: "20px auto",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    };

    const inviteTextStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "20px",
    };

    const buttonStyle = {
        backgroundColor: "#fff",
        color: "#000",
        padding: "15px 85px",
        border: "none",
        borderRadius: "8px",
        fontSize: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "10px",
        minWidth: "150px",
        whiteSpace: "nowrap",
    };

    const linkStyle = {
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const buttonsWrapperStyle = {
        display: "flex",
    };

    return ( <
        div className = "friends-page"
        style = {
            { textAlign: "center", paddingBottom: "60px" } } >
        <
        h1 style = {
            { margin: 0 } } >
        Invite friends < br / > & get more GIRAFFES <
        /h1>

        <
        div style = { buttonContainerStyle } >
        <
        div style = { inviteTextStyle } > Invite a friend < /div> <
        div style = { buttonsWrapperStyle } >
        <
        button style = { buttonStyle }
        onClick = { addFriend } >
        Invite friend <
        /button> <
        div style = { linkStyle } >
        <
        img src = "/images/icons/link.svg"
        alt = "Link icon"
        style = {
            { width: "20px", height: "20px", margin: 0 } }
        /> <
        /div> <
        /div> <
        /div>

        <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                width: "100%",
                padding: "0",
            }
        } >
        <
        p style = {
            {
                margin: 0,
                flexGrow: 1,
                textAlign: "left",
                paddingLeft: "0px",
                fontWeight: "bold",
            }
        } >
        Friends({ friendsData.length }) <
        /p> <
        img src = "/images/icons/reload.svg"
        alt = "Reload icon"
        style = {
            {
                width: "20px",
                height: "20px",
                marginLeft: "10px",
            }
        }
        /> <
        /div>

        <
        Referrals friendsData = { friendsData }
        /> <
        /div>
    );
};

export default Friends;
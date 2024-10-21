import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Leaderboard = ({ showLeaderboard }) => {
    const [currentUserColor, setCurrentUserColor] = useState("");

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        const storedColor = localStorage.getItem("currentUserColor");
        if (storedColor) {
            setCurrentUserColor(storedColor);
        } else {
            const newColor = getRandomColor();
            setCurrentUserColor(newColor);
            localStorage.setItem("currentUserColor", newColor);
        }
    }, []);

    const friendsData = [
        { name: "Alice", color: "#FF5733", rank: 1, giraffes: 120 },
        { name: "Bob", color: "#33FF57", rank: 2, giraffes: 110 },
        { name: "Charlie", color: "#3357FF", rank: 3, giraffes: 100 },
        { name: "Diana", color: "#FF33A6", rank: 4, giraffes: 90 },
        { name: "Eve", color: "#FFD633", rank: 5, giraffes: 80 },
    ];

    const currentUser = {
        name: "You",
        color: currentUserColor,
        giraffes: 130,
    };

    const combinedData = [...friendsData, currentUser];

    const sortedFriendsData = combinedData.sort(
        (a, b) => b.giraffes - a.giraffes,
    );

    const rankedFriendsData = sortedFriendsData.map((friend, index) => ({
        ...friend,
        rank: index + 1,
    }));

    const styles = {
        leaderboardPage: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            padding: "20px",
        },
        header: {
            marginBottom: "20px",
            fontSize: "24px",
        },
        topHolders: {
            marginBottom: "20px",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "left",
        },
        currentUserStyle: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#303030",
        },
        currentUserLogo: {
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#fff",
            marginRight: "10px",
            backgroundColor: currentUser.color,
        },
        footer: {
            marginTop: "auto",
            padding: "10px",
            backgroundColor: "#f1f1f1",
            textAlign: "center",
        },
        friendsListStyle: {
            marginTop: "10px",
            width: "100%",
            textAlign: "left",
            flexGrow: 1,
        },
        friendItemStyle: {
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 0",
            alignItems: "center",
        },
        logoStyle: {
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#fff",
            marginRight: "10px",
        },
        giraffesStyle: {
            fontSize: "14px",
            color: "#555",
            marginTop: "5px",
        },
    };

    return ( <
        div style = { styles.leaderboardPage } >
        <
        h1 style = { styles.header } > Telegram Wall of Fame < /h1> <
        div style = { styles.currentUserStyle } >
        <
        div style = { styles.currentUserLogo } > { currentUser.name.slice(0, 2).toUpperCase() } <
        /div> <
        div style = {
            { flexGrow: 1 } } >
        <
        span style = {
            { fontWeight: "bold" } } > { currentUser.name } <
        /span> <
        div style = { styles.giraffesStyle } > { currentUser.giraffes }
        GIRAFFES <
        /div> <
        /div> <
        span style = {
            { fontWeight: "bold" } } > #{
            rankedFriendsData.find(
                (user) => user.name === currentUser.name,
            ).rank
        } <
        /span> <
        /div> <
        h2 style = { styles.topHolders } > Top Holders < /h2> <
        div style = { styles.friendsListStyle } > {
            rankedFriendsData.map((friend, index) => {
                let medalIcon;
                if (friend.rank === 1) {
                    medalIcon = "🥇";
                } else if (friend.rank === 2) {
                    medalIcon = "🥈";
                } else if (friend.rank === 3) {
                    medalIcon = "🥉";
                } else {
                    medalIcon = null;
                }

                return ( <
                    div style = { styles.friendItemStyle }
                    key = { index } >
                    <
                    div style = {
                        {
                            ...styles.logoStyle,
                                backgroundColor: friend.color,
                        }
                    } >
                    { friend.name.slice(0, 2).toUpperCase() } <
                    /div> <
                    div style = {
                        { flexGrow: 1 } } >
                    <
                    span style = {
                        {
                            margin: 0,
                            paddingLeft: "5px",
                            fontWeight: "bold",
                        }
                    } >
                    { friend.name } <
                    /span> <
                    div style = { styles.giraffesStyle } > { friend.giraffes }
                    GIRAFFES <
                    /div> <
                    /div> {
                        medalIcon ? ( <
                            span style = {
                                { fontSize: "30px" } } > { medalIcon } < /span>
                        ) : ( <
                            span style = {
                                { fontWeight: "bold" } } > #{ friend.rank } <
                            /span>
                        )
                    } <
                    /div>
                );
            })
        } <
        /div> <
        footer style = { styles.footer } > ©2024 Your Company.All rights reserved. <
        /footer> <
        /div>
    );
};

Leaderboard.propTypes = {
    showLeaderboard: PropTypes.bool.isRequired,
};

export default Leaderboard;
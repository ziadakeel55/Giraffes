// Leaderboard.js
import React from "react";

const Leaderboard = ({ showLeaderboard }) => {
    if (!showLeaderboard) {
        return ( <
            button onClick = {
                () => console.log("Leaderboard clicked") } >
            <
            img src = "/images/icons/leaderboard.png"
            alt = "Leaderboard"
            className = "icon" / >
            Leaderboard <
            /button>
        );
    }

    // Sample leaderboard data
    const leaderboardData = [
        { rank: 1, name: "Alice", score: 1500 },
        { rank: 2, name: "Bob", score: 1450 },
        { rank: 3, name: "Charlie", score: 1400 },
        { rank: 4, name: "Diana", score: 1350 },
        { rank: 5, name: "Eve", score: 1300 },
    ];

    // Inline styles for the leaderboard
    const styles = {
        leaderboardPage: {
            textAlign: "center",
            padding: "20px",
        },
        leaderboardList: {
            listStyle: "none",
            padding: "0",
        },
        leaderboardItem: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderBottom: "1px solid #ddd",
            fontSize: "18px",
        },
        rank: {
            fontWeight: "bold",
        },
        name: {
            flexGrow: 1,
            textAlign: "left",
            marginLeft: "20px",
        },
        score: {
            fontWeight: "bold",
            color: "#4CAF50", // Green color for the score
        },
        header: {
            marginBottom: "20px",
            fontSize: "24px",
        },
    };

    return ( <
        div style = { styles.leaderboardPage } >
        <
        h1 style = { styles.header } > Leaderboard < /h1> <
        ul style = { styles.leaderboardList } > {
            leaderboardData.map((user) => ( <
                li key = { user.rank }
                style = { styles.leaderboardItem } >
                <
                span style = { styles.rank } > #{ user.rank } < /span> <
                span style = { styles.name } > { user.name } < /span> <
                span style = { styles.score } > { user.score }
                points < /span> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default Leaderboard;
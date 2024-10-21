import React from "react";

const Referrals = ({ friendsData }) => {
    const friendsListStyle = {
        marginTop: "10px",
        padding: "0 10px", // إضافة حواف داخلية للحاوية
    };

    const friendItemStyle = {
        display: "flex",
        alignItems: "center",
        padding: "10px 5px", // تقليل الحشو لزيادة القرب
    };

    const logoStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: "#fff",
        marginRight: "10px", // زيادة المسافة بين الشعار والنص قليلاً
    };

    const giraffeStyle = {
        fontWeight: "bold",
        marginLeft: "auto", // دفع GIRAFFES إلى اليمين
    };

    return ( <
        div style = { friendsListStyle } > {
            friendsData.map((friend, index) => ( <
                div style = { friendItemStyle }
                key = { index } >
                <
                div style = {
                    {
                        ...logoStyle,
                        backgroundColor: friend.color,
                    }
                } >
                { friend.name.slice(0, 2).toUpperCase() } <
                /div> <
                span style = {
                    {
                        margin: 0,
                        paddingLeft: "5px",
                        fontWeight: "bold",
                    }
                } >
                { friend.name } <
                /span> <
                span style = { giraffeStyle } >
                +111 GIRAFFES <
                /span> <
                /div>
            ))
        } <
        /div>
    );
};

export default Referrals;
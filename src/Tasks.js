import React, { useState } from "react";

const Tasks = () => {
    const tasks = [
        { text: "Invite 5 friends to GIRAFFES", reward: "+2,500 GIRAFFES" },
        { text: "Invite 10 friends to GIRAFFES", reward: "+5,000 GIRAFFES" },
        { text: "Invite 25 friends to GIRAFFES", reward: "+12,000 GIRAFFES" },
        { text: "Invite 50 friends to GIRAFFES", reward: "+25,000 GIRAFFES" },
        { text: "Invite 100 friends to GIRAFFES", reward: "+50,000 GIRAFFES" },
        { text: "Invite 200 friends to GIRAFFES", reward: "+100,000 GIRAFFES" },
        { text: "Invite 500 friends to GIRAFFES", reward: "+300,000 GIRAFFES" },
    ];

    const [buttonStates, setButtonStates] = useState(
        new Array(tasks.length).fill({
            text: "Start",
            style: { backgroundColor: "#303030", color: "white" },
            loading: false,
        })
    );

    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = (index) => {
        const newStates = [...buttonStates];
        if (newStates[index].text === "Start") {
            newStates[index] = {
                text: "Check",
                style: { backgroundColor: "white", color: "black" },
                loading: false,
            };
            setButtonStates(newStates);
        } else {
            // Set loading state
            newStates[index].loading = true;
            setButtonStates(newStates);

            // Simulate loading time before showing notification
            setTimeout(() => {
                newStates[index] = {
                    text: "Start",
                    style: { backgroundColor: "#303030", color: "white" },
                    loading: false,
                };
                setButtonStates(newStates);
                showNotification("Complete Task and try again");
            }, 1000); // Adjust loading duration here (1000ms = 1 second)
        }
    };

    const showNotification = (msg) => {
        setMessage(msg);
        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 5500);
    };

    return ( <
        div className = "tasks" >
        <
        style > { `
                .tasks {
                    color: #ffffff;
                    padding: 5px; 
                    font-family: 'Arial', sans-serif;
                    max-width: 100%;
                    margin: 0 auto;
                    box-sizing: border-box;
                    overflow: hidden; 
                    margin-bottom: 50px; 
                }

                h2 {
                    text-align: left;
                    font-size: 28px;
                    font-weight: bold;
                    margin-bottom: 10px; 
                    color: #d1d1d1;
                }

                .task {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    margin: -16px 0; 
                    border-radius: 5px;
                    justify-content: space-between;
                    width: 100%;
                    box-sizing: border-box;
                }

                .task .invite-text {
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                }

                .task img {
                    width: 24px;
                    height: 24px;
                }

                .task .icon-circle {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 35px;
                    height: 35px;
                    background-color: #313131;
                    border-radius: 50%;
                    margin-right: 12px;
                }

                .task .giraffes-info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: left; 
                }

                .task .reward {
                    font-size: 15px;
                    color: #b0b0b0;
                    margin-top: 3px;
                }

                .start-button {
                    background-color: #303030;
                    color: white;
                    border: none;
                    border-radius: 20px;
                    padding: 10px 20px;
                    font-size: 14px;
                }

                .loading {
                    background-color: #f0f0f0; /* Change color for loading effect */
                    color: #a0a0a0; /* Change text color for loading effect */
                }

                @media (max-width: 768px) {
                    .task {
                        flex-direction: row;
                        justify-content: space-between; 
                    }

                    .start-button {
                        padding: 10px 18px;
                    }
                }

                @media (max-width: 480px) {
                    .invite-text {
                        font-size: 14px;
                    }

                    .start-button {
                        padding: 8px 16px;
                        font-size: 15px;
                    }

                    .task .icon-circle {
                        width: 35px;
                        height: 35px;
                    }
                }

                .notification {
                    position: fixed;
                    bottom: -60px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #2d2d2d;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 15px;
                    width: 300px;
                    height: 50px;
                    animation: notificationSlideIn 0.5s forwards, notificationSlideOut 0.5s forwards 5s;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    white-space: nowrap;
                    overflow: hidden;
                }

                .notification.hide {
                    display: none;
                }

                .notification img {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }

                @keyframes notificationSlideIn {
                    0% {
                        bottom: -60px;
                        opacity: 0;
                    }
                    100% {
                        bottom: 20px;
                        opacity: 1;
                    }
                }

                @keyframes notificationSlideOut {
                    0% {
                        bottom: 20px;
                        opacity: 1;
                    }
                    100% {
                        bottom: -60px;
                        opacity: 0;
                    }
                }
            ` } < /style>

        <
        h2 > Tasks < /h2> {
            tasks.map((task, index) => ( <
                div className = "task"
                key = { index } >
                <
                p className = "invite-text" >
                <
                div className = "icon-circle" >
                <
                img src = "/images/icons/frens.svg"
                alt = "Friends" / >
                <
                /div> <
                div className = "giraffes-info" >
                <
                span > { task.text } < /span> <
                span className = "reward" > { task.reward } < /span> <
                /div> <
                /p> <
                button className = { `start-button ${buttonStates[index].loading ? "loading" : ""}` }
                onClick = {
                    () => handleButtonClick(index) }
                style = { buttonStates[index].style }
                disabled = { buttonStates[index].loading } >
                { buttonStates[index].loading ? "Loading..." : buttonStates[index].text } <
                /button> <
                /div>
            ))
        } <
        div className = { `notification ${showMessage ? "" : "hide"}` } >
        <
        img src = "/images/icons/x.svg"
        alt = "Close" / > { message } <
        /div> <
        /div>
    );
};

export default Tasks;
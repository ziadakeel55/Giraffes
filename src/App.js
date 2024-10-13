import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./App.css";

import ConnectWallet from "./ConnectWallet";
import Leaderboard from "./Leaderboard";
import Friends from "./Friends";
import Tasks from "./Tasks";
import Loading from "./Loading";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [loadingDots, setLoadingDots] = useState("...");
    const [currentView, setCurrentView] = useState("home"); // State to manage views

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.ready();
            } else {
                console.warn("Telegram WebApp not available");
            }
            setLoading(false);
        }, 3000);

        return () => clearTimeout(loadingTimer);
    }, []);

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setLoadingDots((prev) => (prev.length < 3 ? prev + "." : ""));
            }, 500);

            return () => clearInterval(interval);
        }
    }, [loading]);

    if (loading) {
        return <Loading loadingDots = { loadingDots }
        />;
    }

    // Function to render the current view
    const renderContent = () => {
        switch (currentView) {
            case "friends":
                return <Friends / > ;
            case "leaderboard":
                return <Leaderboard showLeaderboard = { true }
                />;
            default:
                return ( <
                    div className = "home-content" >
                    <
                    header className = "header" >
                    <
                    span className = "curved-text" > Your Score < /span> <
                    /header> <
                    div className = "wallet-section" >
                    <
                    ConnectWallet / >
                    <
                    div className = "logo-container" >
                    <
                    img src = "/images/logo.png"
                    alt = "Logo"
                    className = "logo" / >
                    <
                    /div>

                    <
                    Swiper className = "swiper-container"
                    pagination = {
                        { clickable: true } }
                    slidesPerView = { 1 }
                    spaceBetween = { 30 }
                    loop = { false }
                    modules = {
                        [Pagination] } >
                    <
                    SwiperSlide >
                    <
                    div className = "item" >
                    <
                    div className = "title" > Share your OG Status < /div> <
                    div className = "text" > In Telegram stories < /div> <
                    button className = "action-button" > Share < /button> <
                    /div> <
                    /SwiperSlide> <
                    SwiperSlide >
                    <
                    div className = "item" >
                    <
                    div className = "title" > Join GIRAFFES Community < /div> <
                    div className = "text" > Home
                    for Telegram OGs < /div> <
                    button className = "action-button" > Join < /button> <
                    /div> <
                    /SwiperSlide> <
                    SwiperSlide >
                    <
                    div className = "item" >
                    <
                    div className = "title" > Follow Us on X.COM < /div> <
                    div className = "text" > Stay updated with the latest news < /div> <
                    button className = "action-button" > Follow < /button> <
                    /div> <
                    /SwiperSlide> <
                    /Swiper> <
                    Tasks / >
                    <
                    /div> <
                    /div>
                );
        }
    };

    return ( <
        div className = "app" > { renderContent() } <
        footer className = "menu" >
        <
        button onClick = {
            () => setCurrentView("home") } >
        <
        img src = "/images/icons/home.png"
        alt = "Home"
        className = "icon" / >
        Home <
        /button> <
        button onClick = {
            () => setCurrentView("leaderboard") } >
        <
        img src = "/images/icons/leaderboard.png"
        alt = "Leaderboard"
        className = "icon" / >
        Leaderboard <
        /button> <
        button onClick = {
            () => setCurrentView("friends") } >
        <
        img src = "/images/icons/friends.png"
        alt = "Friends"
        className = "icon" / >
        Friends <
        /button> <
        /footer> <
        /div>
    );
};

export default App;
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
import YourScore from "./YourScore";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [loadingDots, setLoadingDots] = useState("...");
    const [currentView, setCurrentView] = useState("home");
    const [fade, setFade] = useState(false);

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

    const handleChangeView = (view) => {
        if (view !== currentView) {
            setFade(true);
            setTimeout(() => {
                setCurrentView(view);
                setFade(false);
            }, 300);
        }
    };

    if (loading) {
        return <Loading loadingDots = { loadingDots }
        />;
    }

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
                    YourScore / >
                    <
                    div className = "wallet-section" >
                    <
                    ConnectWallet / >
                    <
                    /div> <
                    div className = "logo-container" >
                    <
                    img src = "/images/logo.png"
                    alt = "Logo"
                    className = "logo" /
                    >
                    <
                    /div> <
                    div className = "spacer" > < /div> <
                    div className = "currency" > 0 < /div> <
                    div className = "currency-name" > GIRAFFES < /div> <
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
                    div className = "title" >
                    Share your OG Status <
                    /div> <
                    div className = "text" >
                    In Telegram stories <
                    /div> <
                    button className = "action-button" >
                    Share <
                    /button> <
                    /div> <
                    /SwiperSlide> <
                    SwiperSlide >
                    <
                    div className = "item" >
                    <
                    div className = "title" >
                    Join GIRAFFES Community <
                    /div> <
                    div className = "text" >
                    Home
                    for Telegram OGs <
                    /div> <
                    button className = "action-button" >
                    Join <
                    /button> <
                    /div> <
                    /SwiperSlide> <
                    SwiperSlide >
                    <
                    div className = "item" >
                    <
                    div className = "title" >
                    Follow Us on X.COM <
                    /div> <
                    div className = "text" > Updates & more! < /div> <
                    button className = "action-button" >
                    Follow <
                    /button> <
                    /div> <
                    /SwiperSlide> <
                    /Swiper> <
                    Tasks / >
                    <
                    /div>
                );
        }
    };

    return ( <
        div className = { `app ${fade ? "fade-out" : "fade-in"}` } > { renderContent() } <
        footer className = "menu" >
        <
        button onClick = {
            () => handleChangeView("home") } >
        <
        img src = "/images/icons/home.svg"
        alt = "Home"
        className = "icon" / >
        Home <
        /button> <
        button onClick = {
            () => handleChangeView("leaderboard") } >
        <
        img src = "/images/icons/leaderboard.svg"
        alt = "Leaderboard"
        className = "icon" / >
        Leaderboard <
        /button> <
        button onClick = {
            () => handleChangeView("friends") } >
        <
        img src = "/images/icons/friends.svg"
        alt = "Friends"
        className = "icon" / >
        Friends <
        /button> <
        /footer> <
        /div>
    );
};

export default App;
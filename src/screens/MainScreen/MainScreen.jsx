import React from "react";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import "./MainScreen.css";

export default function MainScreen() {
    return (
        <div className="main-screen">
            <div className="main-container">
                <LeftMenu />
                <div className="name-container">
                    <h1 className="name-title">Ioannis Gkountras </h1>
                    <p className="intro-text">
                        I'm an ECE student and developer with a passion for
                        creating visually appealing and user-friendly websites
                        and applications. Let's make the web a better place
                        together!
                    </p>
                </div>
            </div>
        </div>
    );
}

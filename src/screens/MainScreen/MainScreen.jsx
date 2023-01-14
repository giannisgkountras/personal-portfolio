import React from "react";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import "./MainScreen.css";
import me from "../../assets/me2.jpg";
import FadeIn from "../../utils/FadeIn";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";

export default function MainScreen() {
    return (
        <>
            <div className="main-screen">
                <LeftMenu />
                <div className="main-container">
                    <FadeIn>
                        <div className="row">
                            <div className="profile-picture">
                                <img
                                    src={me}
                                    width="500px"
                                    alt="Gkountras Ioannis"
                                />
                            </div>
                            <div className="name-container">
                                <h1 className="name-title">
                                    Ioannis Gkountras{" "}
                                </h1>
                                <p className="intro-text">
                                    I'm an ECE student and developer with a
                                    passion for creating visually appealing and
                                    user-friendly websites and applications.
                                    Let's make the web a better place together!
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <div id="about" className="about-screen">
                <div className="header">
                    <h1 className="about-title">About me</h1>
                </div>
                <div className="boxes-container">
                    <div className="box-row">
                        <div className="box">
                            <h1 className="box-title react">ReactJS</h1>
                            <img
                                className="rotating-image"
                                src={react}
                                width="200px"
                                alt="ReactJS"
                            ></img>
                        </div>
                        <div className="box">
                            <h1 className="box-title html">HTML 5</h1>
                            <img src={html} width="180px" alt="HTML5"></img>
                        </div>
                        <div className="box">
                            <h1 className="box-title css">CSS 3</h1>
                            <img src={css} width="160px" alt="CSS3"></img>
                        </div>
                    </div>
                    <div className="box-row">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

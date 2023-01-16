import React from "react";
import FadeIn from "../../utils/FadeIn";
import LeftMenu from "../LeftMenu/LeftMenu";
import me from "../../assets/me2.jpg";
import "./MainComponent.css";
export default function MainComponent() {
    return (
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
                            <h1 className="name-title">Ioannis Gkountras </h1>
                            <p className="intro-text">
                                I'm an ECE student and developer with a passion
                                for creating visually appealing and
                                user-friendly websites and applications. Let's
                                make the web a better place together!
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}

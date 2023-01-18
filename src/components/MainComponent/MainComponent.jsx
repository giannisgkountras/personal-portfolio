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
                                width="600px"
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
                            <div className="center">
                                <a
                                    className="cv-btn"
                                    href="https://drive.google.com/file/d/1a6O_J7suAr90RmC4zaPcnvLXe1nTyDCv/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View my CV here
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}

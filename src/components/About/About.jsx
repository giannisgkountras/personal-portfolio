import React from "react";
import "./About.css";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import python from "../../assets/python.png";
import gitTech from "../../assets/git-tech.png";
import js from "../../assets/js.png";
export default function About() {
    return (
        <div id="about" className="about-screen">
            <div className="header">
                <h1 className="about-title">My skills</h1>
            </div>
            <div className="row">
                <div className="half-screen smaller">
                    <h1 className="about-me">About me:</h1>
                    <div className="boxes-container">
                        <p className="about-text">
                            I am an undergraduate Electrical and Computer
                            Engineering Student with a passion for software
                            development. I recently started my own startup,{" "}
                            <a
                                className="orana"
                                href="https://orana.gr"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Orana
                            </a>
                            , where I gained valuable business development and
                            customer acquisition skills. I am seeking a new
                            challenge where I can utilize my abilities. As a
                            strong communicator and team player, I am excited to
                            join a dynamic team and continue to learn and grow
                            as a developer. Let's connect to discuss potential
                            opportunities.
                        </p>
                    </div>
                </div>
                <div className="half-screen">
                    <h1 className="tech-stack">Tech Stack:</h1>
                    <div className="boxes-container">
                        <div className="box-row">
                            <div className="box">
                                <h1 className="box-title react">ReactJS</h1>
                                <img
                                    className="rotating-image"
                                    src={react}
                                    width="100px"
                                    alt="ReactJS"
                                ></img>
                            </div>
                            <div className="box">
                                <h1 className="box-title html">HTML 5</h1>
                                <img src={html} width="100px" alt="HTML5"></img>
                            </div>
                            <div className="box">
                                <h1 className="box-title css">CSS 3</h1>
                                <img src={css} width="80px" alt="CSS3"></img>
                            </div>
                        </div>
                        <div className="box-row">
                            <div className="box">
                                <h1 className="box-title git">Git</h1>
                                <img
                                    src={gitTech}
                                    width="100px"
                                    alt="Git"
                                ></img>
                            </div>
                            <div className="box">
                                <h1 className="box-title python">Python</h1>
                                <img
                                    src={python}
                                    width="100px"
                                    alt="Python"
                                ></img>
                            </div>
                            <div className="box">
                                {" "}
                                <h1 className="box-title js">Javascript</h1>
                                <img
                                    src={js}
                                    width="120px"
                                    alt="Javascript"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

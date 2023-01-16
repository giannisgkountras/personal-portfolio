import React from "react";
import { Link } from "react-router-dom";
import "./LeftMenu.css";
import github from "../../assets/git.png";
import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import gitlab from "../../assets/gitlab.svg";

window.addEventListener("scroll", function () {
    var menu = document.querySelector(".left-menu");
    if (window.scrollY > 0) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
});
export default function LeftMenu() {
    return (
        <div className="left-menu">
            {/* <h1 className="burger">☰</h1> */}
            <div className="left-menu-container">
                <div className="menu-links-container">
                    <a className="menu-link" href="#about">
                        About
                    </a>
                    <a className="menu-link" href="#projects">
                        Projects
                    </a>

                    <a className="menu-link" href="/">
                        Education
                    </a>

                    <a className="menu-link" href="/">
                        Contact
                    </a>
                </div>
                <div className="socials">
                    <a
                        className="socials-link"
                        href="https://github.com/giannisgkountras"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={github} width="40px" alt="github" />
                    </a>
                    <a
                        className="socials-link"
                        href="https://gitlab.com/giannisgkountras"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={gitlab} width="40px" alt="github" />
                    </a>
                    <a
                        className="socials-link"
                        href="https://www.linkedin.com/in/ioannis-gkountras/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} width="40px" alt="github" />
                    </a>
                    <a
                        className="socials-link"
                        href="mailto:gkountrasioannis@gmail.com"
                    >
                        <img src={gmail} width="40px" alt="github" />
                    </a>
                </div>
            </div>
        </div>
    );
}

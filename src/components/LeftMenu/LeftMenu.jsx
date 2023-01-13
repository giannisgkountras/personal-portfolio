import React from "react";
import { Link } from "react-router-dom";
import "./LeftMenu.css";
import github from "../../assets/git.png";
import linkedin from "../../assets/linkedin.png";
export default function LeftMenu() {
    return (
        <div className="left-menu">
            {/* <h1 className="burger">☰</h1> */}
            <div className="left-menu-container">
                <div className="menu-links-container">
                    <Link className="menu-link" to="/">
                        About
                    </Link>
                    <Link className="menu-link" to="/">
                        Projects
                    </Link>

                    <Link className="menu-link" to="/">
                        Education
                    </Link>

                    <Link className="menu-link" to="/">
                        Contact
                    </Link>
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
                        href="https://www.linkedin.com/in/ioannis-gkountras/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} width="40px" alt="github" />
                    </a>
                </div>
            </div>
        </div>
    );
}

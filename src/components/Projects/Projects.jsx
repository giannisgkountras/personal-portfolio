import React from "react";
import ProjectSlider from "../ProjectSlider/ProjectSlider";
import "./Projects.css";
export default function Projects() {
    return (
        <div className="projects-screen" id="projects">
            <h1 className="projects-title">My projects</h1>
            <ProjectSlider />
        </div>
    );
}

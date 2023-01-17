import React from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Education from "../../components/Education/Education";
export default function MainScreen() {
    return (
        <>
            <MainComponent />
            <About />
            <Projects />
            <Education />
        </>
    );
}

import React, { useEffect, useState } from "react";

import orana from "../../assets/orana.png";
import labbro from "../../assets/labbro.png";
import talos from "../../assets/talos.png";
import tictactoe from "../../assets/tictactoe.png";
import doctor from "../../assets/doctor.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import "./ProjectSlider.css";

const ProjectSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const images = [orana, labbro, talos, doctor, tictactoe];
    const descriptions = [
        "The website of my start-up, Orana.",
        "The Lab Bro portal project.",
        "A gym website template.",
        "A doctor portfolio template.",
        "A two player tic-tac-toe game made in React.",
    ];
    const links = [
        "https://orana.gr",
        "https://labbro.gr",
        "https://talos-website.netlify.app",
        "https://doctor-template-giannis.netlify.app/",
        "https://tic-tac-toe-giannis.netlify.app/",
    ];

    useEffect(() => {
        setPrevIndex(currentIndex);
    }, [currentIndex]);

    const handleNext = () => {
        const nextIndex =
            currentIndex + 1 === images.length ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    };

    const handlePrevious = () => {
        const previousIndex =
            currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(previousIndex);
    };

    const handleClick = (newIndex) => {
        setCurrentIndex(newIndex);
    };
    return (
        <>
            <div className="slider">
                <img
                    src={left}
                    className="previous"
                    alt="previous"
                    onClick={handlePrevious}
                ></img>
                <div>
                    <a
                        href={links[currentIndex]}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            key={currentIndex}
                            className="slider-image"
                            src={images[currentIndex]}
                            alt="slider"
                        />
                    </a>
                </div>
                <img
                    src={right}
                    className="next"
                    alt="next"
                    onClick={handleNext}
                ></img>
            </div>
            <div className="bullets">
                {images.map((image, i) => (
                    <div
                        key={i}
                        className={`bullet ${
                            i === currentIndex ? "active" : ""
                        }`}
                        onClick={() => handleClick(i)}
                    />
                ))}
            </div>
            <h1 key={currentIndex + 1} className="slider-image">
                {descriptions[currentIndex]}
            </h1>
        </>
    );
};

export default ProjectSlider;

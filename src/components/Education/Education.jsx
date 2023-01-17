import React from "react";
import "./Education.css";
export default function Education() {
    return (
        <div id="education" className="education-screen">
            <h1 className="education-title">My education</h1>
            <div className="education-container">
                <div id="hs" className="education-box">
                    <p>Highschool Diploma (Grade 19.8/20)</p>
                </div>
                <div id="c2" className="education-box">
                    <p>Cambridge Proficiency in English</p>
                </div>
                <div id="b1" className="education-box">
                    <p>Goethe-Zertifikat B1 in German</p>
                </div>

                <div className="education-box ece">
                    <p>Electrical and Computer Engineering Student</p>
                </div>
            </div>
        </div>
    );
}

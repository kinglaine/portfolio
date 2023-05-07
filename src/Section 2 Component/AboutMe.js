import "./AboutMe.css"
import Technologies from "./Technologies";
import Skills from "./Skills";
import HireMe from "./HireMe";
import DownloadCV from "./DownloadCV";
import React from 'react';
function AboutMe(){
    return(
        <section id="section2">
            <div className="introduction">
                <h4><b>ABOUT</b></h4>
                <h1>Let me introduce myself.</h1>
                <p>I'm a passionate computer science student with a focus on software engineering. 
                    My goal is to design and develop innovative software solutions that simplify and enhance people's lives. I'm committed to continuous learning and growth, 
                    both in terms of technical skills and personal development. I'm always willing to go the extra mile to improve my abilities and collaborate with others to achieve common goals. 
                    Thank you for checking out my portfolio!</p>
            </div>
            <div id="containerSkills">
                <Technologies></Technologies>
                <Skills></Skills>
            </div>
            <div id="containerButton">
                <ul>
                    <li>
                    <HireMe></HireMe>
                    <DownloadCV></DownloadCV>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default AboutMe;
import "./MyWork.css"
import Project  from "./Project";
import PicConnect from "../Portfolio Pic/PicConnect.png";
import Gitpulse from "../Portfolio Pic/Gitpulse.png"
import Flashcard from "../Portfolio Pic/FlashCard.jpg";
import Exclusive from "../Portfolio Pic/Exclusive.png";
import React from 'react';
function MyWork (){
    return(
        <div id="section3">
            <div id="paragraphs1">
                <h4><b>WORK</b></h4>
                <h1>Check Out Some of My Works</h1>
                <h5>Most recent work shown. Will be updated monthly!</h5>
            </div>
            <div className="projectContainer">
                <div className="webProjects">
                    <Project name={"PicConnect"} link = {"https://github.com/PicConnect-2-0/PicConnect_Frontend"} image = {PicConnect}></Project>
                    <Project name={"GitPulse"} description = {"Git Pulse"} link = {"https://github.com/rahimaaa/SEMetrics.frontend"} image = {Gitpulse}></Project>
                </div>
                <div className="mobileProjects">
                    <Project name={"Exclusive"} description = {"E-Commerce Mobile Application"} image = {Exclusive} link = {"https://github.com/kinglaine/Exclusive"}></Project>
                    <Project name={"Triche"} description = {"Flashcard Mobile Application"} image = {Flashcard} link = {"https://play.google.com/store/apps/details?id=woody.Ge.flashcardapp"}></Project>
                </div>
            </div>
        </div>
    );
}

export default MyWork;
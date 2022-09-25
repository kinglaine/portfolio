import "./AboutMe.css"
import Technologies from "./Technologies";
import Skills from "./Skills";
import HireMe from "./HireMe";
import DownloadCV from "./DownloadCV";

function AboutMe(){
    return(
        <section id="section2">
            <div className="introduction">
                <h4><b>ABOUT</b></h4>
                <h1>Let me introduce myself.</h1>
                <p>I’m a computer science student specializing in software engineering. I create beautiful and unique software that make people’s life easy and more enjoyable. I love learning and will always keep on learning. My current goal is to grow my technical and soft skills. I’m willing to work hard and learn from anyone that will teach me.</p>
            </div>
            <div id="container2">
                <Technologies></Technologies>
                <Skills></Skills>
            </div>
            <div id="container3">
                <HireMe></HireMe>
                <DownloadCV></DownloadCV>
            </div>
        </section>
    );
}

export default AboutMe;
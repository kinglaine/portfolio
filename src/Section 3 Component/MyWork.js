import "./MyWork.css"
import Project  from "./Project";
import Josefina from "../Portfolio Pic/Josefina/bottom.png";
import Guess from "../Portfolio Pic/Guess/Play.png";
import Flashcard from "../Portfolio Pic/FlashCard.jpg";
import Exclusive from "../Portfolio Pic/Exclusive.png"
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
                    <Project name={"Body-Care"} link = {"https://kinglaine.github.io/Josefina-Body-Care-Collection/"} image = {Josefina}>
                    </Project>
                    <Project name={"Guess"} description = {"Browser Game"} link = {"https://github.com/kinglaine/GUESS"} image = {Guess}></Project>
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
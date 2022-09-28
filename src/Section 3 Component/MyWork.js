import "./MyWork.css"
import Project  from "./Project";
import Josefina from "../Portfolio Pic/Josefina/bottom.png";
import Guess from "../Portfolio Pic/Guess/Play.png";
function MyWork (){
    return(
        <div id="section3">
            <div id="paragrahps1">
                <h4>WORK</h4>
                <h1>Check Out Some of My Works</h1>
                <h5>Most recent work shown. Will be updated montlhy!</h5>
            </div>
            <div className="projectContainer">
                <div className="webProjects">
                    <Project name={"Josefina-Body-Care-Collection"} link = {"https://kinglaine.github.io/Josefina-Body-Care-Collection/"} image = {Josefina}>
                    </Project>
                    <Project name={"Guess"} description = {"Browser Game"} link = {"https://github.com/kinglaine/GUESS"} image = {Guess}></Project>
                </div>
                <div className="mobileProjects">
                    <Project name={"Exclusive"} description = {"Ecommerce Mobile Application"}></Project>
                    <Project name={"Triche"} description = {"Flascard Mobile Application"}></Project>
                </div>
            </div>
        </div>
    );
}

export default MyWork;
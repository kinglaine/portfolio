import "./Intro.css";
import About from "./More Component/About";
import linkedIn from "../Icons/linkedin.svg"
import gitHub from "../Icons/github.svg"
function Header(){
    return(
        <section className="section1">
            <div className="Info">
                <h5 id="p1">Hello,</h5>
                <h1 id="p2">I'm Woodley Gelin.</h1>
                <h10 id="p3">| FRONT-END DEVELOPER | ANDROID DEVELOPER |</h10>
                <About></About>
                <div className="connect">
                    <a href="https://www.linkedin.com/in/woodley-gelin-0bb9211a1/"><img id= "linkedin" src = {linkedIn} alt = "linkedIn logo"></img></a>
                    <a href="https://github.com/kinglaine/Kinglaine/blob/main/README.md"><img id="github" src = {gitHub} alt = "gitHub logo"></img></a>
                </div>
            </div>
        </section>
    );
}
export default Header;
import "./Connect.css";
import linkedIn from "../Icons/linkedin.svg";
import gitHub from "../Icons/github.svg";
function Connect(){
    return(
        <div className="connect">
            <a href="https://www.linkedin.com/in/woodley-gelin-0bb9211a1/" target="_blank" rel="noreferrer"><img id= "linkedin" src = {linkedIn} alt = "linkedIn logo"></img></a>
            <a href="https://github.com/kinglaine/Kinglaine/blob/main/README.md" target="_blank" rel="noreferrer"><img id="github" src = {gitHub} alt = "gitHub logo"></img></a>
        </div>
    );
}

export default Connect;
import "./Connect.css";
import linkedIn from "../Icons/linkedin.svg";
import gitHub from "../Icons/github.svg";
import React from 'react';
function Connect(){
    return(
        <div className="connect">
            <a href="https://www.linkedin.com/in/woodley-gelin-0bb9211a1/" target="_blank" rel=" noopener noreferrer"><img id= "linkedin" src = {linkedIn} alt = "linkedIn logo"></img></a>
            <a href="https://github.com/kinglaine" target="_blank" rel=" noopener noreferrer"><img id="github" src = {gitHub} alt = "gitHub logo"></img></a>
        </div>
    );
}

export default Connect;
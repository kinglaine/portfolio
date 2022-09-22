import "./Technologies.css"
import adobeLogo from"../Icons/adobeXD.svg"
import androidLogo from "../Icons/android-studio.svg"
import eclipseLogo from  "../Icons/eclipse.svg"
import postgreLogo from"../Icons/postgresql.svg"
import reactLogo from"../Icons/react.svg"
import gitLogo from "../Icons/git.svg"
function Technologies(){
    return(
        <div className="Technologies">
            <span><b>TECHNOLOGIES</b></span>
            <p id="main">This list includes the tools I’m most proficient at using but is not limited to everything I have in my toolkit.
            </p>
            <ul className="TechnologyList">
                <div id="paragraph1">
                    <div className="techLogo">
                        <li id="name">REACTJS &nbsp;</li> <img  src = {reactLogo} width = {10} alt = "reactjs logo"></img>
                    </div>
                    <p>This portfolio was built with Reactjs.</p>
                </div>
                <div id="paragraph2">
                    <div className="techLogo">
                        <li id="name">ANDROID-STUDIO &nbsp;</li> <img  src = {androidLogo} width = {10} alt = "android-studio logo"></img>
                    </div>
                    <p>Used to build 3 apps. Currenlty making an Ecommerce app.</p>
                </div>
                <div id="paragraph3">
                    <div className="techLogo">
                        <li id="name">ADOBE XD &nbsp;</li><img src = {adobeLogo} width = {10} alt = "adobe xd logo"></img>
                    </div>
                    <p>Use it for designing and prototyping softwares.</p>
                </div>
                <div id="paragraph4">
                    <div className="techLogo">
                    <li id="name"> ECLIPSE &nbsp;</li> <img  src = {eclipseLogo} width = {10} alt = "eclipse ide logo"></img>
                    </div>
                    <p>I use eclipse for class activies and mostly debugging.</p>
                </div>
                <div id="paragraph5">
                    <div className="techLogo">
                    <li id="name">POSTGRESQL &nbsp;</li> <img src = {postgreLogo} width = {10} alt = "postgresql logo"></img>
                    </div>
                    <p>I use postgresql mostly for school projects.</p>
                </div>
                <div id="paragraph5">
                    <div className="techLogo">
                    <li id="name">GIT &nbsp;</li> <img src = {gitLogo} width = {10} alt = "git logo"></img>
                    </div>
                    <p>I use git and github to track and manage my projects</p>
                </div>
            </ul>

        </div>
    );
}

export default Technologies;
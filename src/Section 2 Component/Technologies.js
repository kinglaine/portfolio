import "./Technologies.css"
import adobeLogo from"../Icons/adobeXD.svg"
import androidLogo from "../Icons/android-studio.svg"
import eclipseLogo from  "../Icons/eclipse.svg"
import postgresLogo from"../Icons/postgresql.svg"
import reactLogo from"../Icons/react.svg"
import gitLogo from "../Icons/git.svg"
function Technologies(){
    return(
        <div className="Technologies">
            <span id="title"><b>TECHNOLOGIES</b></span>
            <p id="mains">This list includes the tools I’m most proficient at using but is not limited to everything I have in my toolkit.
            </p>
            <ul className="TechnologyList">
                    <li className="techLogo">
                        <span id="name">ANDROID-STUDIO &nbsp;</span>
                    </li>
                    <p>Used to build 3 apps. Currently making an E-Commerce app.</p>

                    <li className="techLogo">
                    <span id="name">POSTGRESQL &nbsp;</span> 
                    </li>
                    <p>I use postgresql mostly for school projects.</p>

                    <li className="techLogo">
                        <span id="name">REACT JS &nbsp;</span> 
                    </li>
                    <p>This portfolio was built with React Js.</p>
                
                    <li className="techLogo">
                        <span id="name">ADOBE XD &nbsp;</span>
                    </li>
                    <p>Use it for designing and prototyping softwares.</p>
                
                
                    <li className="techLogo">
                    <span id="name"> ECLIPSE &nbsp;</span>
                    </li>
                    <p>I use eclipse for class activities and mostly debugging.</p>
       
                    <li className="techLogo">
                    <span id="name">GIT &nbsp;</span>
                    </li>
                    <p>I use git and github to track and manage my projects.</p>
                
            </ul>

        </div>
    );
}

export default Technologies;
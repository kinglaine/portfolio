import "./Technologies.css"
import React from 'react';

function Technologies(){
    return(
        <div className="Technologies">
            <span id="title"><b>TECHNOLOGIES</b></span>
            <p id="mains">The following tools represent my core competencies, but I'm always exploring and expanding my skillset.</p>
            <ul className="TechnologyList">
                    <li className="techLogo">
                        <span id="name">Android-Studio &nbsp;</span>
                    </li>
                    <p>Used to build 3 apps. Currently making an E-Commerce app.</p>

                    <li className="techLogo">
                    <span id="name">PostgreSQL &nbsp;</span>
                    </li>
                    <p>I use postgresql mostly for school projects.</p>

                    <li className="techLogo">
                        <span id="name">REACT &nbsp;</span> 
                    </li>
                    <p>This portfolio was built with React Js, and I have experience with React Native</p>
                
                    <li className="techLogo">
                        <span id="name">Adobe XD &nbsp;</span>
                    </li>
                    <p>Use it for designing and prototyping softwares.</p>
                
                
                    <li className="techLogo">
                    <span id="name"> Eclipse &nbsp;</span>
                    </li>
                    <p>I use eclipse for class activities and mostly debugging.</p>
       
                    <li className="techLogo">
                    <span id="name">Git/Github &nbsp;</span>
                    </li>
                    <p>I use git and github to track and manage my projects.</p>
                
            </ul>

        </div>
    );
}

export default Technologies;
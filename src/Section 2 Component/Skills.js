import "./Skills.css"
import React from 'react';
function Skills (){
    return(
        <div className="Skills">
            <span><b>SKILLS</b></span>
            <p>This list includes the languages that I have been using for over 2 years now, I am also familiar with <strong>python</strong> and currently learning <strong>C++</strong>.</p>
            <ul className="SkillList">
                <li className="list">
                    <strong id="javascript">JAVASCRIPT</strong>
                </li>
                <li className="list">
                    <strong id="html">HTML5</strong>
                </li>

                <li className="list">
                    <strong id="css">CSS3</strong> 
                </li>
                <li className="list">
                    <strong id="java">JAVA</strong>
                </li >
                <li className="list">
                    <strong id="sql">SQL</strong>
                </li>
            </ul>

        </div>
    );
}

export default Skills;
import "./Skills.css"
import React from 'react';
function Skills (){
    return(
        <div className="Skills">
            <span><b>SKILLS</b></span>
            <p>I have a strong knowledge of the following programming languages. 
                Additionally, I have some familiarity with other languages and am always eager to learn new ones.</p>
            <ul className="SkillList">
                <li className="list">
                    <strong id="javascript">Javascript</strong>
                </li>
                <li className="list">
                    <strong id="html">Html</strong>
                </li>
                <li className="list">
                    <strong id="css">Css</strong> 
                </li>
                <li className="list">
                    <strong id="java">Java</strong>
                </li >
                <li className="list">
                    <strong id="sql">SQL</strong>
                </li>
            </ul>

        </div>
    );
}

export default Skills;
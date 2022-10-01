import ProgressBar from "./ProgressBar";
import "./Skills.css"
import ProgressBarInfo from "./ProgressBarInfo";

function Skills (){
    //percentages for progress bar
    const ninety = 90;
    const ninetyfive = 95;
    const eighty = 80;
    return(
        <div className="Skills">
            <span><b>SKILLS</b></span>
            <p>This list includes the languages that I have been using for over 2 years now, I am also familiar with <strong>python</strong> and currently learning <strong>C++</strong>.</p>
            <ul className="SkillList">
                <li className="list">
                    <strong id="html">HTML5</strong>
                    <ProgressBarInfo percent={ninety} margin_left = {58}></ProgressBarInfo>
                    <ProgressBar progress={ninety}> </ProgressBar>
                </li>

                <li className="list">
                    <strong id="css">CSS3</strong>
                    <ProgressBarInfo percent={ninety} margin_left = {58}></ProgressBarInfo>
                    <ProgressBar progress={ninety}> </ProgressBar>
                </li>
                <li className="list">
                    <strong id="javascript">JAVASCRIPT</strong>
                    <ProgressBarInfo percent={eighty} margin_left = {51}></ProgressBarInfo>
                    <ProgressBar progress={eighty}> </ProgressBar>
                </li>
                <li className="list">
                    <strong id="java">JAVA</strong>
                    <ProgressBarInfo percent={ninetyfive} margin_left = {61}></ProgressBarInfo>
                    <ProgressBar progress={ninetyfive}> </ProgressBar>
                </li >
                <li className="list">
                    <strong id="sql">SQL</strong>
                    <ProgressBarInfo percent={eighty} margin_left = {51}></ProgressBarInfo>
                    <ProgressBar progress={eighty}> </ProgressBar>
                </li>
            </ul>

        </div>
    );
}

export default Skills;
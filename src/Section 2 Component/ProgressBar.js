import "./ProgressBar.css"
import ProgressBarInfo from "./ProgressBarInfo";

function ProgressBar({progress}){
    return(
        <div>
            <div className="outerShell">
                <div className="innerShell" style={{width: `${progress}%`}}></div>
            </div>
        </div>
        
    );
}

export default ProgressBar;
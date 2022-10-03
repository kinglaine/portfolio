import "./ProgressBar.css"
function ProgressBar({progress}){
    return(
        <div id="bar">
            <div className="outerShell">
                <div className="innerShell" style={{width: `${progress}%`}}></div>
            </div>
        </div>
        
    );
}

export default ProgressBar;
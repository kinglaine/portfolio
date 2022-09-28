import "./ProgressBar.css"
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
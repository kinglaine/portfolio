import "./ProgressBarInfo.css"
function ProgressBarInfo({info, margin_left}){
    return(
        <div id = "progressInfoContainer">
            <div className="rectangle" style={{
                marginLeft: `${margin_left}%`
            }}>
            <span id="percent">{info}%</span>
            <div className="triangle"></div>
        </div>
        </div>
        
    );
}

export default ProgressBarInfo;
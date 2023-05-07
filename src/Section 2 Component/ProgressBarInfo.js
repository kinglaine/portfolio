import "./ProgressBarInfo.css"
import React from 'react';
function ProgressBarInfo({percent, margin_left}){
    return(
        <div id = "progressInfoContainer">
            <div className="rectangle" style={{ marginLeft: `${margin_left}%`}}>
                <p id="percent">{percent}%</p>
            </div>
        </div>
        
    );
}

export default ProgressBarInfo;
import "./DownloadCV.css";
import React from 'react';
function DownloadCV(){
    return(
        <a href="https://drive.google.com/file/d/1XeHJYAi737nCaBstAzkT21J0JHOkhTFR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="Download">
                <span><b>RESUME</b></span>
            </button>
        </a>
    );
}

export default DownloadCV;
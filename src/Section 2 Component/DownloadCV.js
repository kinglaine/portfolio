import "./DownloadCV.css";
import React, { useState } from 'react';

function DownloadCV(){
    const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
    return(
        <div>
            <button className="Download" onClick={openModal}><span><b>RESUME</b></span></button>
            {showModal && (
                <div style={{position: 'fixed', height: '95%', width: '90%', backgroundColor: 'black', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, borderRadius: 10, paddingBottom: 4, paddingTop: 4}}>
                    <iframe src="https://onedrive.live.com/embed?resid=80CB0E3B82F9628A%2121038&amp;authkey=!AGyT20t_Srdz6Cw&amp;em=2&amp;wdEmbedCode=0" width="90%" height="90%" frameborder="0">
                        This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>
                    </iframe>
                    <button className="Close" onClick={closeModal} style = {{backgroundColor: 'red'}}><span><b style={{color: 'white'}}>Close</b></span></button>
                </div>
            )}
        </div>
    );
}

export default DownloadCV;
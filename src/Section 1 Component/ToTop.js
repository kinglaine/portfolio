import "./ToTop.css";
import { useState } from "react";
import React from 'react';
function ToTop(){
    const [value, setVisible] = useState("hidden");
    window.onscroll = function () {
        if (document.body.scrollTop > 7 ||
            document.documentElement.scrollTop > 7){
          setVisible("visible");
        }else{
            setVisible("hidden");
        }
      };
    return(
        <a href="#section1">
            <button id="ToTopButton" type="button" style={{visibility: value}}>Back To Top</button>
        </a>
        
    );
}

export default ToTop;
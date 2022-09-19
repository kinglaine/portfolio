 import Hamburger from "hamburger-react";
import React, { useState } from "react";
 import "./NavBar.css"

function NavBar(){
    const [isClick, setOpen] = useState(false);
    return(
        <div className="Nav">
            <Hamburger color="rgb(245, 58, 58)" onToggle={toggle => {
                if(toggle){
                    setOpen(true);
                }else{
                    setOpen(false);
                }
            }}> </Hamburger>
            <span className="Name"><strong>WOOD</strong></span>
            {isClick? 
                    <div className="DropDown">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Resume</li>
                            <li>Work</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                : null}
        </div>
        
    );
}
export default NavBar;
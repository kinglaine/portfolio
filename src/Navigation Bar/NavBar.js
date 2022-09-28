 import Hamburger from "hamburger-react";
import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
 import "./NavBar.css";

function NavBar(){
    const [isClick, setOpen] = useState(false);
    return(
        <div className="Nav">
            <Hamburger color="red" onToggle={toggle => {
                if(toggle){
                    setOpen(true);
                }else{
                    setOpen(false);
                }
            }}> </Hamburger>
            <span className="Name"><strong>WOOD</strong></span>
            {isClick? 
                    <div className="DropDown">
                        <div className="navigation">
                            <ul className="NavList">
                                <Scrollspy items={ ['section1', 'section2', 'section3', 'section4'] } currentClassName = "Name">
                                    <a class = "active" href="#section1" id="s1"><li>Home</li></a>
                                    <a href="#section2" id="s1"><li>About</li></a>
                                    <a href="#section3" id="s1"><li>Work</li></a>
                                    <a href="#section4" id="s1"><li>Contact</li></a>
                                </Scrollspy>
                            </ul>
                        </div>
                    </div>
                : null}
        </div>
        
    );
}
export default NavBar;
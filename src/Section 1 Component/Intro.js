import "./Intro.css";
import About from "./More Component/About";
import Connect from "./Connect";
import React from 'react';
function Header(){
    return(
        <section id="section1" className="section1">
            <div className="Info">
                <h5 id="p1">Hello,</h5>
                <h1 id="p2">I'm Woodley Gelin.</h1>
                <h6 id="p3">| FRONT-END DEVELOPER | ANDROID DEVELOPER |</h6>
                <About></About>
                <Connect></Connect>
            </div>
        </section>
    );
}
export default Header;
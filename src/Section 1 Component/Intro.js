import "./Intro.css"
import About from "./More Component/About";
function Header(){
    return(
        <div className="background">
            <div className="Info">
                <h5 id="p1">Hello,</h5>
                <h1 id="p2">I'm Woodley Gelin.</h1>
                <h10 id="p3">| FRONT-END DEVELOPER | ANDROID DEVELOPER |</h10>
                <About></About>
            </div>
        </div>
    );
}
export default Header;
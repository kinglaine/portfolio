import "./App.css"
import Intro from "./Section 1 Component/Intro";
import NavBar from "./Navigation Bar/NavBar";
import AboutMe from "./Section 2 Component/AboutMe";
import Skills from "./Section 2 Component/Skills";

function App() {
  return(
    <div>
      <div className="Intro">
        <Intro></Intro>
        <NavBar></NavBar>
      </div>
        <AboutMe></AboutMe>
    </div>

  );
}

export default App;

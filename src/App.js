import Intro from "./Section 1 Component/Intro";
import "./App.css"
import Hamburger from "hamburger-react"
import NavBar from "./Navigation Bar/NavBar";
function App() {
  return(
    <div>
      <div className="Intro">
        <Intro></Intro>
        <NavBar></NavBar>
      </div>
    </div>

  );
}

export default App;

import "./App.css"
import Intro from "./Section 1 Component/Intro";
import NavBar from "./Navigation Bar/NavBar";
import AboutMe from "./Section 2 Component/AboutMe";
import ToTop from "./Section 1 Component/ToTop";
import MyWork from "./Section 3 Component/MyWork";
import Footer from "./Section 4 Component/Footer";


function App() {
  return(
    <div>
      <div className="Intro">
        <Intro></Intro>
        <NavBar></NavBar>
        <ToTop></ToTop>
      </div>
        <AboutMe></AboutMe>
        <MyWork></MyWork>
        <Footer></Footer>
    </div>

  );
}

export default App;

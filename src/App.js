import "./App.css";
import Description from "./Introduction.js";
import Knowledge from "./Knowledge.js";
import Projects from "./Projects.js";
import Social from "./Social.js";
import About from "./About.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Description />
        <About />
        <Projects />
        <Knowledge />
        <Social />
        <Footer />
      </header>
    </div>
  );
}

export default App;

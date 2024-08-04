import "./App.css";
import Description from "./Description.js";
import Knowledge from "./Knowledge.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Social from "./Social.js";
import About from "./About.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Description />
        <Projects />
        <About />
        <Knowledge />
        <Contact />
        <Social />
      </header>
    </div>
  );
}

export default App;

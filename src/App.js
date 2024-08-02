import "./App.css";
import Description from "./Description.js";
import Knowledge from "./Knowledge.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Social from "./Social.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Description />
        <Knowledge />
        <Projects />
        <Contact />
        <Social />
      </header>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

import "./styles/global.css";
import "./styles/background.css";

function App() {
  return (
    <div className="app-shell">
      <div className="aurora-background"></div>
      <div className="noise-overlay"></div>
      <div className="vignette-overlay"></div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Internship />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
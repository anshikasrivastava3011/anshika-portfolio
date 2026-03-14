import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand brand-docked">
        <span className="brand-script">Anshika</span>
        <span className="brand-bold">SRIVASTAVA</span>
      </div>

      <nav className="nav-links">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#skills">SKILLS</a>
        <a href="#achievements">ACHIEVEMENTS</a>
        <a href="#internship">EXPERIENCE</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}

export default Navbar;
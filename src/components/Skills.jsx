import "../styles/skills.css";

function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="section-top">
        <span className="section-number">03</span>
        <h2 className="section-heading">Core Competencies</h2>
      </div>

      <div className="skills-wrap">
        <div className="skills-featured glass-card">
          <p className="skills-mini-label">FULL STACK FOUNDATION</p>
          <h3 className="skills-main-title">
            Building seamless products from interface to backend logic.
          </h3>
          <p className="skills-main-text">
  My skill set combines frontend interface design, backend system development,
  database architecture, and modern development tooling to build scalable
  and user-centric web applications. I focus on creating clean, responsive
  interfaces while ensuring efficient server logic, reliable APIs, and
  optimized data handling across the entire application stack.
</p>

<p className="skills-main-text">
  Through hands-on projects and practical development experience, I work
  across the complete product lifecycle — from designing intuitive user
  interfaces to implementing backend services, integrating databases,
  and deploying functional full stack solutions.
</p>
        </div>

        <div className="skills-side">
          <div className="skill-panel glass-card">
            <p className="skill-label">FRONTEND</p>
            <h3>HTML, CSS, JavaScript, React</h3>
          </div>

          <div className="skill-panel glass-card">
            <p className="skill-label">BACKEND</p>
            <h3>Node.js, Express.js, PHP</h3>
          </div>

          <div className="skill-panel glass-card">
            <p className="skill-label">DATABASE</p>
            <h3>MongoDB, MySQL, PostgreSQL</h3>
          </div>

          <div className="skill-panel glass-card">
            <p className="skill-label">LANGUAGES</p>
            <h3>Python, C++, JavaScript, Java, C, PHP</h3>
          </div>

          <div className="skill-panel glass-card">
            <p className="skill-label">TOOLS</p>
            <h3>Git, GitHub, VS Code, Postman</h3>
          </div>
        </div>
      </div>

      {/* Add Soft Skills HERE */}
      <div className="soft-skills">
        <p className="soft-title">SOFT SKILLS</p>

        <div className="soft-skill-list">
          <span>Problem Solving</span>
          <span>Communication</span>
          <span>Team Collaboration</span>
          <span>Adaptability</span>
          <span>Time Management</span>
        </div>
      </div>

    </section>
  );
}

export default Skills;
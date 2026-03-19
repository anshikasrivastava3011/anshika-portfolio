import "../styles/about.css";

function About() {
  return (
    <section className="content-section" id="about">
      <div className="section-top">
        <span className="section-number">01</span>
        <h2 className="section-heading">About</h2>
      </div>

      <div className="about-grid">
        <div className="glass-card large-card">
          <h3 className="card-main-heading">
            Turning ideas into polished digital products.
          </h3>

          <p>
            I am Anshika Srivastava, a 3rd-year B.Tech Computer Science student
            with a Full Stack Web Development minor. I enjoy building modern,
            responsive, and user-friendly websites and web applications that
            solve real-world problems.
          </p>

          <p>
            My interests include frontend design, backend development, database
            integration, and creating real-world projects that combine
            functionality with good aesthetics. I have experience working with
            technologies like React.js, Node.js, Express.js, PHP, MongoDB,
            MySQL, and Tailwind CSS, and I enjoy building full-stack
            applications that integrate strong backend logic with intuitive user
            interfaces.
          </p>

          <div className="about-skills">
  <p className="label-text">CORE SKILL SET</p>

  <div className="skill-tags">
    <span>C</span>
    <span>C++</span>
    <span>Java</span>
    <span>JavaScript</span>
    <span>Python</span>
    <span>PHP</span>
    <span>React.js</span>
    <span>Node.js</span>
    <span>Express.js</span>
    <span>MongoDB</span>
    <span>MySQL</span>
    <span>PostgreSQL</span>
    <span>REST APIs</span>
    <span>Tailwind CSS</span>
    <span>HTML</span>
    <span>CSS</span>
  </div>

  <p className="label-text skills-subheading">COURSEWORK & CONCEPTS</p>

  <div className="skill-tags">
    <span>Data Structures</span>
    <span>Algorithms</span>
    <span>OOP</span>
    <span>DBMS</span>
    <span>Operating Systems</span>
    <span>Computer Networks</span>
    <span>Software Engineering</span>
  </div>

  
</div>
        </div>

        <div className="side-cards">
          <div className="glass-card small-card">
            <p className="label-text">DEGREE & MAJOR</p>
            <h4>B.Tech CSE (2023-2027)</h4>
            <h5>CGPA: 8.02</h5>
            <p>Lovely Professional University</p>
            <p>Phagwara, Punjab</p>
          </div>

          <div className="glass-card small-card">
            <p className="label-text">FOCUS</p>
            <h4>Full Stack Web Development</h4>
            <p>
              React.js, Node.js, Express.js, PHP, MongoDB, MySQL, PostgreSQL,
              REST APIs, Tailwind CSS
            </p>
          </div>

          <div className="glass-card small-card">
            <p className="label-text">EDUCATION</p>

            <h4>SJS Public School</h4>
            <p>Uttar Pradesh, India</p>
            <p>Intermediate; Percentage: 85.2</p>
            <p>April 2021 - March 2023</p>

            <br />

            <h4>St. Peter’s School</h4>
            <p>Uttar Pradesh, India</p>
            <p>Matriculation; Percentage: 89.4</p>
            <p>April 2020 - March 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
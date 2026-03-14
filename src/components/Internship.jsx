import "../styles/internship.css";

function Internship() {
  return (
    <section className="content-section" id="internship">
      <div className="section-top">
        <span className="section-number">04</span>
        <h2 className="section-heading">Internship</h2>
      </div>

      <div className="internship-wrap">
        <div className="internship-hero glass-card">
          <p className="internship-company">Reliance Retail</p>
<p className="internship-role">IT Intern</p>

          <h3 className="internship-title">
            Technical, E-commerce
            <br />
            & Supply Chain
          </h3>

          <div className="internship-divider"></div>

          <p className="internship-duration">
            Jun 2025 – Jul 2025 • Reliance Corporate Park, Navi Mumbai
          </p>
        </div>

        <div className="internship-metrics glass-card">
          <div className="metric-pill">
            <span className="metric-label">DURATION</span>
            <span className="metric-value">8 Weeks</span>
          </div>

          <div className="metric-pill">
            <span className="metric-label">DOMAIN</span>
            <span className="metric-value">E-commerce</span>
          </div>

          <div className="metric-pill">
            <span className="metric-label">FOCUS</span>
            <span className="metric-value">Supply Chain</span>
          </div>
        </div>

        <div className="internship-cards">
          <div className="glass-card internship-card">
            <h4>SOP Documentation</h4>
            <p>
              Worked on documenting operational workflows and standard process
              steps across technical and supply chain activities.
            </p>
          </div>

          <div className="glass-card internship-card">
            <h4>UAT Support</h4>
            <p>
              Contributed to user acceptance testing by validating flows,
              identifying issues, and improving process clarity.
            </p>
          </div>

          <div className="glass-card internship-card">
            <h4>System Flow Understanding</h4>
            <p>
              Gained practical exposure to enterprise workflow movement across
              e-commerce, OMS, SAP/CRM, and logistics-related systems.
            </p>
          </div>

          <div className="glass-card internship-card">
            <h4>Business + Technical Exposure</h4>
            <p>
              Built stronger understanding of how technical systems support
              real-world retail operations, dispatch, and fulfillment logic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Internship;
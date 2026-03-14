import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrap">
        <div className="contact-left">
          <div className="contact-topline">
            <span className="contact-number">06</span>
            <span className="contact-line"></span>
            <span className="contact-label">GET IN TOUCH</span>
          </div>

          <h2 className="contact-heading">
            Let’s build
            <br />
            something
            <br />
            <span>remarkable.</span>
          </h2>
        </div>

        <div className="contact-right">
          <a
            className="contact-row"
            href="mailto:anshika.srivas3800@gmail.com"
          >
            <span className="contact-row-label">EMAIL</span>
            <span className="contact-row-value">anshika.srivas3800@gmail.com</span>
            <span className="contact-row-arrow">↗</span>
          </a>

          <a
            className="contact-row"
            href="https://www.linkedin.com/in/anshikasrivas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-row-label">LINKEDIN</span>
            <span className="contact-row-value">linkedin.com/in/anshikasrivas</span>
            <span className="contact-row-arrow">↗</span>
          </a>

          <a
            className="contact-row"
            href="https://github.com/anshikasrivastava3011"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-row-label">GITHUB</span>
            <span className="contact-row-value">github.com/anshikasrivastava3011</span>
            <span className="contact-row-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
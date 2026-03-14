import { useEffect, useRef } from "react";
import "../styles/hero.css";

function Hero() {
  const staticRef = useRef(null);

  useEffect(() => {
  const easeInOut = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const render = () => {
    const staticEl = staticRef.current;
    if (!staticEl) return;

    const rawProgress = Math.min(window.scrollY / 420, 1);
    const easedProgress = easeInOut(rawProgress);

    const staticOpacity = 1 - easedProgress;
    const navOpacity = easedProgress;

    staticEl.style.opacity = `${staticOpacity}`;
    document.documentElement.style.setProperty(
      "--nav-brand-opacity",
      `${navOpacity}`
    );
  };

  window.addEventListener("scroll", render, { passive: true });
  window.addEventListener("resize", render);

  render();

  return () => {
    window.removeEventListener("scroll", render);
    window.removeEventListener("resize", render);
  };
}, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div ref={staticRef} className="hero-name-block hero-name-static">
          <h2 className="hero-script">Anshika</h2>
          <h1 className="hero-title">SRIVASTAVA</h1>
        </div>

        <p className="hero-tagline">
          Full Stack Developer • B.Tech CSE Student • Building elegant web experiences
        </p>

        <div className="hero-actions">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn primary-btn"
          >
            View CV
          </a>

          <a href="/resume.pdf" download className="hero-btn secondary-btn">
            Download CV
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        ABOUT ME ↘
      </a>
    </section>
  );
}

export default Hero;
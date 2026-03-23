import "../styles/achievements.css";

import problem from "../assets/badges/problem-solving.png";
import java from "../assets/badges/java.png";
import python from "../assets/badges/python.png";
import sql from "../assets/badges/sql.png";
import c from "../assets/badges/c.png";
import cpp from "../assets/badges/cpp.png";

function Achievements() {
  return (
    <section className="content-section" id="achievements">
      <div className="section-top">
        <span className="section-number">05</span>
        <h2 className="section-heading">Achievements & Certifications</h2>
      </div>

      <div className="achievements-wrap">
        <div className="achievement-block">
          <p className="achievement-label">NOTABLE DISTINCTION</p>

          <a
            className="featured-achievement glass-card"
            href="/InternshipCertificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="featured-icon">🏆</div>

            <div className="featured-content">
              <h3>Reliance Retail IT Internship</h3>
              <p>
                Selected for a technical internship at Reliance Retail, contributing to e-commerce and supply-chain systems while gaining hands-on experience with enterprise software workflows.
              </p>
            </div>
          </a>
        </div>

        <div className="achievement-divider"></div>

        <div className="achievement-block">
          <div className="achievement-row-head">
            <div className="achievement-row-left">
              <span className="row-icon">⌘</span>
              <h3>HackerRank Progress</h3>
            </div>

            <p className="achievement-row-note">
              Verified algorithmic competency.
            </p>
          </div>

          <div className="badges-row">
            <a
              className="badge-item"
              href="https://www.hackerrank.com/profile/anshika_srivas31"
              target="_blank"
              rel="noreferrer"
            >
              <img src={problem} alt="Problem Solving Badge" />
            </a>
            <a
              className="badge-item"
              href="https://www.hackerrank.com/profile/anshika_srivas31"
              target="_blank"
              rel="noreferrer"
            >
              <img src={cpp} alt="C++ Badge" />
            </a>
            <a
              className="badge-item"
              href="https://www.hackerrank.com/profile/anshika_srivas31"
              target="_blank"
              rel="noreferrer"
            >
              <img src={java} alt="Java Badge" />
            </a>



            <a
              className="badge-item"
              href="https://www.hackerrank.com/profile/anshika_srivas31"
              target="_blank"
              rel="noreferrer"
            >
              <img src={sql} alt="SQL Badge" />
            </a>

            <a
              className="badge-item"
              href="https://www.hackerrank.com/profile/anshika_srivas31"
              target="_blank"
              rel="noreferrer"
            >
              <img src={c} alt="C Badge" />
            </a>
            <a
              className="badge-item"
              href="https://www.hackerrank.com/profile/anshika_srivas31"
              target="_blank"
              rel="noreferrer"
            >
              <img src={python} alt="Python Badge" />
            </a>


          </div>
        </div>

        <div className="achievement-divider"></div>

        <div className="achievement-block">
          <p className="achievement-label">VERIFIED CERTIFICATES (CLICK TO VIEW)</p>

          <div className="cert-grid">
            <a
              className="cert-card glass-card"
              href="https://media.licdn.com/dms/image/v2/D562DAQF3PXmRtHfb0Q/profile-treasury-image-shrink_1280_1280/B56Zzi_TAJKYAQ-/0/1773334771332?e=1773946800&v=beta&t=RwLU-kwkZuwHpb1xISq1k2tEBoccPTtJqWaKFHTJ4ds"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-top">
                <span className="cert-source">AWS</span>
                <span className="cert-arrow">↗</span>
              </div>

              <h4>AWS Cloud Practitioner Essentials</h4>

              <div className="cert-line"></div>

              <p>Mar 2026</p>
            </a>

            <a
              className="cert-card glass-card"
              href="https://www.skills.google/public_profiles/fa04eeba-4fe8-4c5e-88b3-033fb7b00b3b/badges/22973192"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-top">
                <span className="cert-source">Google</span>
                <span className="cert-arrow">↗</span>
              </div>

              <h4>Google Workspace User and Resource Management</h4>

              <div className="cert-line"></div>

              <p>Mar 2026</p>
            </a>

            <a
              className="cert-card glass-card"
              href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS65S14750051104443790"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-top">
                <span className="cert-source">NPTEL</span>
                <span className="cert-arrow">↗</span>
              </div>

              <h4>Social Networks</h4>

              <div className="cert-line"></div>

              <p>May 2025</p>
            </a>
            <a
              className="cert-card glass-card"
              href="https://www.cipherschools.com/certificate/preview?id=687e0cb87efd6d5090703bac"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-top">
                <span className="cert-source">CIPHERSCHOOLS</span>
                <span className="cert-arrow">↗</span>
              </div>

              <h4>Full-Stack Development using MERN Stack</h4>

              <div className="cert-line"></div>

              <p>Jul 2025</p>
            </a>
            <a
              className="cert-card glass-card"
              href="https://skillsoft.digitalbadges.skillsoft.com/9c209f49-95f4-4603-8645-2f3b456e32ea"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-top">
                <span className="cert-source">Skillsoft</span>
                <span className="cert-arrow">↗</span>
              </div>

              <h4>Computational Theory: Language Principle & Finite Automata Theory</h4>

              <div className="cert-line"></div>

              <p>Aug 2025</p>
            </a>
            <a
              className="cert-card glass-card"
              href="https://www.coursera.org/account/accomplishments/verify/ZGFYOW3TTN3Q"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-top">
                <span className="cert-source">COURSERA</span>
                <span className="cert-arrow">↗</span>
              </div>

              <h4>Computer Communications Specialization</h4>

              <div className="cert-line"></div>

              <p>Nov 2024</p>
            </a>
            <a
              className="cert-card glass-card"
              href="https://www.hackerrank.com/certificates/a80361962ec4"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-top">
                <span className="cert-source">HAKERRANK</span>
                <span className="cert-arrow">↗</span>
              </div>

              <h4>SQL (Intermediate)</h4>

              <div className="cert-line"></div>

              <p>Jul 2024</p>
            </a>
            <a
              className="cert-card glass-card"
              href="https://www.coursera.org/account/accomplishments/verify/W53RV6V7AIVF"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-top">
                <span className="cert-source">COURSERA</span>
                <span className="cert-arrow">↗</span>
              </div>

              <h4>TCP/IP and Advanced Topics</h4>

              <div className="cert-line"></div>

              <p>Nov 2024</p>
            </a>

            <a
              className="cert-card glass-card"
              href="https://www.coursera.org/account/accomplishments/verify/FSLFPBW4C8I3"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-top">
                <span className="cert-source">GOOGLE</span>
                <span className="cert-arrow">↗</span>
              </div>

              <h4>The Bits and Bytes of Computer Networking</h4>

              <div className="cert-line"></div>

              <p>Month Year</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
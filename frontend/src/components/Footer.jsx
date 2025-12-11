import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="text-white pt-1 pb-3 mt-5 fixed-bottom"
      style={{
        background: "rgba(28, 27, 27, 0.8)",
        borderTop: "1px solid #706e6eff",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="container text-center d-flex flex-column justify-content-between align-items-center">
        <div className="d-flex justify-content-between flex-column flex-md-row w-100 align-items-center mb-3">
          <p className="mt-4" style={{ opacity: 0.8 }}>
            📍 Kadapa, Andhra Pradesh
            <br />
            📧{" "}
            <a
              href="mailto:mohankrishna28803@gmail.com"
              className="footer-email"
            >
              mohankrishna28803@gmail.com
            </a>
          </p>

          <div className="d-flex justify-content-center gap-4 mt-3">
            <a
              href="https://github.com/mohan-krishna-reddy28"
              target="_blank"
              className="footer-icon"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="footer-icon"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="mailto:mohankrishna28803@gmail.com"
              className="footer-icon"
            >
              <FaEnvelope size={26} />
            </a>
          </div>

          <p className="mt-4" style={{ fontSize: "13px", opacity: 0.7 }}>
            Built using{" "}
            <span style={{ color: "#00ffcc" }}>
              React.js · Node.js · MongoDB
            </span>
            <br />
            Designed & Developed by{" "}
            <strong style={{ color: "#c3ff00" }}>Mohan Krishna Reddy</strong>
          </p>
        </div>
        <p style={{ fontSize: "13px", opacity: 0.6 }}>
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        <a
          href="/admin/login"
          style={{
            opacity: 0.3,
            fontSize: "12px",
            color: "#00ffcc",
            textDecoration: "none",
          }}
        >
          ⚙️ Admin
        </a>

        <div
          onClick={scrollTop}
          style={{
            cursor: "pointer",
            marginTop: "20px",
            fontSize: "25px",
            color: "#00ffcc",
          }}
        >
          <FaArrowUp />
        </div>
      </div>

      <style>{`
        .footer-link {
          color: #00ffcc;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s;
        }
        .footer-link:hover {
          color: white;
        }
        .footer-icon {
          color: #00ffcc;
          transition: 0.3s;
        }
        .footer-icon:hover {
          transform: scale(1.2);
          color: white;
        }
        .footer-email {
          color: #ffd500;
          text-decoration: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

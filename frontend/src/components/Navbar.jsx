import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/skills", name: "Skills" },
    { to: "/projects", name: "Projects" },
    { to: "/internships", name: "Internships" },
    { to: "/certificates", name: "Certifications" },
    { to: "/contact", name: "Contact" },
  ];

  return (
    <motion.div
      className="floating-navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-header">
        <div className="nav-logo">
          <Link to="/" className="nav-logo-link">Portfolio</Link>
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {links.map((link) => (
          <motion.div key={link.to} whileHover={{ scale: 1.1 }}>
            <Link
              to={link.to}
              className={
                location.pathname === link.to ? "active-link" : "inactive-link"
              }
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

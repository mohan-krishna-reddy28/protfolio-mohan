import React, { Component } from "react";
import { motion } from "framer-motion";
import "./styles.css";

class Internships extends Component {
  render() {
    const internships = [
      {
        role: "Cyber Security Intern",
        company: "EDUNET Foundation + AICTE (IBM SkillBuild)",
        duration: "Oct 2023 – Nov 2023",
        description:
          "Worked on Steganography using Python — hiding images inside images using LSB method. Gained hands-on experience in cybersecurity fundamentals, image processing, and encryption techniques."
      },
      {
        role: "Web Development Practice",
        company: "Self Learning",
        duration: "2022 – Present",
        description:
          "Built multiple projects including Portfolio Website, Netflix Clone, Job Journey, and Train Booking System using HTML, CSS, JavaScript, and Java. Improved frontend design and OOP concepts."
      }
    ];

    return (
      <motion.section
        className="text-white page-up-margin internship-container mt-5 ms-md-5 me-md-5 pt-md-5 ps-md-5 pe-md-5 pt-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 ,y:-10}}
        transition={{ duration: 0.4 }}
      >
        <h2 className="theme-color text-center mb-3">Internships</h2>

        <div className="internship-list px-5 mt-4">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              className="internship-block"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <h3 className="internship-role">{item.role}</h3>
              <p className="internship-company">
                <strong>{item.company}</strong>
              </p>
              <p className="internship-duration">{item.duration}</p>
              <p className="internship-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  }
}

export default Internships;

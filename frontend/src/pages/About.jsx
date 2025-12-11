import React, { Component } from "react";
import { motion } from "framer-motion";
import "./styles.css";

class About extends Component {
  render() {
    return (
      <motion.section
        className="text-white mt-5 mx-2 mx-md-5 p-md-5 pt-5 px-4 text-left text-white page-up-margin"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 ,y:-10}}
        transition={{ duration: 0.4 }}
      >
        <h2 className="theme-color mb-4 text-center">About Me</h2>

        <p>
          Hello! I'm <strong className="highlight">Mohan Krishna Reddy</strong>, a passionate and dedicated
          Computer Science Engineering student from{" "}
          <strong>Sri Venkateswara College of Engineering, Tirupati</strong>, with a CGPA of{" "}
          <strong>9</strong>.
        </p>

        <p>
          I love exploring the world of software development, and I enjoy building practical applications using my technical skills. 
          I’m particularly interested in web development, Full-Stack developer, Java-based programming, and cybersecurity. 
          My goal is to build a successful career as a full-stack or backend developer.
        </p>

        <p>
          I have worked on projects like a <strong>Portfolio</strong> using HTML, CSS and JS, 
          <strong> Library Management System</strong>, and a <strong>Bank Application</strong> 
          using Java and file handling. I also completed a cybersecurity internship focused on 
          <strong> Steganography using Python</strong>.
        </p>

        <p>
          My journey so far has been enriched by several certifications including{" "}
          <strong>NPTEL (DBMS)</strong>, <strong> Leetcode (Java, Problem Solving)</strong>,
          and <strong>IBM SkillBuild</strong> (AICTE + Edunet Foundation).
        </p>

        <h4 className="mt-4 theme-color">Education</h4>
        <ul>
          <li>
            <strong>B.Tech in CSE</strong> (2021–2025) – <strong>9 CGPA</strong> – SVCE, Tirupati
          </li>
          <li>
            <strong>12th</strong> (94%) – Narayana Jr College
          </li>
          <li>
            <strong>10th</strong> (9.7 GPA) – Narayana School
          </li>
        </ul>

        <p>
          <strong>Hobbies:</strong> Coding, Watching Cricket, Watching Movies/Series
        </p>

        <p>
          <strong>Languages Known:</strong> English, Telugu, Hindi
        </p>
      </motion.section>
    );
  }
}

export default About;

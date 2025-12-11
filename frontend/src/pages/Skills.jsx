import React, { Component } from "react";
import { motion } from "framer-motion";
import "./styles.css";

class Skills extends Component {
  render() {
    const skillCategories = [
      {
        title: "Programming Languages",
        skills: ["Java", "Python (Beginner)", "MySQL"]
      },
      {
        title: "MERN Stack",
        skills: ["MongoDB", "Express.js", "React.js (Learning)", "Node.js"]
      },
      {
        title: "Web Technologies",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
      },
      {
        title: "Frameworks / Tools",
        skills: ["VS Code", "GitHub", "IntelliJ IDEA"]
      },
      {
        title: "Core CS Subjects",
        skills: ["OOP", "DBMS", "DSA", "Computer Networks"]
      }
    ];

    return (
      <motion.section
        className="text-white page-up-margin skills-new mt-5 ms-5 me-5 pt-md-5 ps-md-5 pe-md-5 pt-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 ,y:-10}}
        transition={{ duration: 0.4 }}
      >
        <h2 className="theme-color text-center">My Skills</h2>


        <div className="skills-list m-auto mt-4">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              className="skill-block"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.10 }}
            >
              <h3 className="skill-heading">{cat.title}</h3>
              <ul>
                {cat.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  }
}

export default Skills;

import React, { Component } from "react";
import { motion } from "framer-motion";
import "./styles.css";

class Certificates extends Component {
  render() {
    const certificates = [
      {
        name: "NxtWave – HTML, CSS and JavaScript",
        issuer: "NxtWave",
        year: "2025",
        description:
          "Gained strong fundamentals in HTML5, CSS3, and JavaScript for building interactive web pages. Developed hands-on projects showcasing responsive layouts and dynamic UI behavior.",
        link: "https://certificates.ccbp.in/intensive/static-website?id=KBZCBPLXST",
      },
      {
        name: "NxtWave – Building Own Responsive Websites",
        issuer: "NxtWave",
        year: "2025",
        description:
          "Learned modern responsive design techniques using Flexbox, Grid, and media queries. Built mobile-first websites ensuring smooth experience across all screen sizes.",
        link: "https://certificates.ccbp.in/intensive/responsive-website?id=GVFMQNNTLK",
      },
      {
        name: "NxtWave – Programming Fundamentals with Python",
        issuer: "NxtWave",
        year: "2025",
        description:
          "Studied core programming concepts such as variables, loops, functions, and data structures. Strengthened logical thinking through hands-on Python coding exercises.",
        link: "https://certificates.ccbp.in/intensive/programming-foundations?id=IKHKXXJSOJ",
      },
      {
        name: "NxtWave – Introduction to SQL",
        issuer: "NxtWave",
        year: "2025",
        description:
          "Learned essential SQL concepts including CRUD operations, filtering, joins, and aggregations. Gained practical experience writing optimized SQL queries for real-world problems.",
        link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=FWNZMQXMIA",
      },
      {
        name: "NxtWave – JavaScript",
        issuer: "NxtWave",
        year: "2025",
        description:
          "Mastered DOM manipulation, event handling, APIs, and asynchronous JavaScript. Built dynamic web applications using modern JS techniques and problem-solving patterns.",
        link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=QJBWDBQGAQ",
      },
      {
        name: "NxtWave – Node JS",
        issuer: "NxtWave",
        year: "2025",
        description:
          "Learned backend development with Node.js including routing, middleware, REST APIs, and server-side logic. Built real server applications interacting with databases.",
        link: "https://certificates.ccbp.in/intensive/node-js?id=RXJEBJJAFL",
      },
      {
        name: "NxtWave – React JS",
        issuer: "NxtWave",
        year: "2025",
        description:
          "Studied modern React concepts including components, props, state, hooks, and routing. Built interactive and reusable UI components following best practices.",
        link: "https://certificates.ccbp.in/intensive/react-js?id=VAFHZJALVH",
      },
      {
        name: "NPTEL – Database Management Systems (DBMS)",
        issuer: "NPTEL",
        year: "2023",
        description:
          "Completed an in-depth DBMS course covering ER models, SQL, functional dependencies, normalization, and transactions. Strengthened understanding of how databases are designed and optimized.",
        link: "https://drive.google.com/file/d/1_e-YPYWfmHmUGqp3Hjz2moXqF7x64g1W/view",
      },
      {
        name: "NPTEL – Natural Language Processing (NLP)",
        issuer: "NPTEL",
        year: "2024",
        description:
          "Studied key NLP concepts including text preprocessing, stemming, lemmatization, POS tagging, and language models. Gained practical understanding of how machines process and interpret human language.",
        link: "https://drive.google.com/file/d/1_e-YPYWfmHmUGqp3Hjz2moXqF7x64g1W/view",
      },
    ];

    return (
      <motion.section
        className="text-white mt-5 mx-2 mx-md-5 p-md-5 pt-5 px-4 text-left text-white page-up-margin"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="theme-color text-center">Certificates</h2>

        <div className="certificate-list mt-5 px-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="certificate-block"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <h3 className="certificate-name">{cert.name}</h3>
              <p className="certificate-issuer">
                <strong>{cert.issuer}</strong> — {cert.year}
              </p>
              <p>{cert.description}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  }
}

export default Certificates;

import React, { Component } from "react";
import { motion } from "framer-motion";
import BlurText from "./effects/BlurText";
import Popup from "reactjs-popup";

import "./styles.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.roles = [
      "MERN Developer",
      "Java Programmer",
      "Deep Learning Enthusiast",
    ];

    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        index: (prevState.index + 1) % this.roles.length,
      }));
    }, 1500);
  }

  handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { index } = this.state;

    return (
      <motion.div
        className="mt-5 mx-2 mx-md-5 p-md-5 pt-5 px-4 text-left text-white page-up-margin"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="name-heading theme-color mt-2">
          Hi! I'm
          <BlurText
            text="Mohan Krishna Reddy"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={this.handleAnimationComplete}
            className="text-2xl my-name mb-8"
          />
        </h1>

        <motion.p
          key={index}
          className="lead rotating-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {this.roles[index]}
        </motion.p>

        <p>
          Motivated to apply theoretical knowledge and gain practical experience
          through real-world tech solutions.
        </p>

        <Popup
          modal
          trigger={
            <motion.button className="button text-white mt-4">
              View Resume
            </motion.button>
          }
        >
          {(close) => (
            <div className="popup-box">
              <div className="popup-header">
                <button
                  className="button"
                  onClick={() => window.open("/my-resume.pdf", "_blank")}
                >
                  Open in New Tab
                </button>

                <button className="close-btn" onClick={close}>
                  ✖
                </button>
              </div>

              <iframe
                src="/my-resume.pdf"
                className="popup-pdf"
                title="resume-preview"
              ></iframe>
            </div>
          )}
        </Popup>

        <div className="mt-5 text-center">
          <h3 className="theme-color">Welcome to My Portfolio</h3>
          <p className="text-secondary fs-5">
            I'm a dedicated and enthusiastic Computer Science Engineering
            student from Sri Venkateswara College of Engineering, Tirupati, with
            a strong foundation in Java, MySQL, HTML, CSS, BootStrap and Python.
            With hands-on experience in both academic and personal projects, I'm
            keen to contribute to innovative software solutions. My journey
            includes building Clones using HTML/CSS, developing a Java-based
            Train Booking Management System, and a console-based Bank Management
            Application. I’ve also explored cybersecurity through a
            Steganography internship. I'm always eager to learn, passionate
            about problem-solving, and enjoy turning ideas into reality with
            code.
          </p>
        </div>
      </motion.div>
    );
  }
}

export default Home;

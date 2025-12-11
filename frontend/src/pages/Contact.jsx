import React, { Component } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./styles.css";

class Contact extends Component {
  state = {
    isSubmitted: false,
    loading: false, // NEW
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    const res = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    this.setState({ loading: false });

    if (data.success) {
      this.setState({ isSubmitted: true });
    }
  };

  render() {
    const { isSubmitted } = this.state;
    return (
      <motion.section
        className="text-white mt-5 mx-2 mx-md-5 p-md-5 pt-5 px-4 text-left text-white page-up-margin"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="theme-color text-center">Contact Me</h2>

        <p className="text-center contact-intro mx-md-5 px-md-5 ">
          I’m always excited to collaborate on innovative projects and open to
          full-time opportunities. Feel free to reach out via email, phone, or
          the form below.
        </p>

        <div className="contact-info d-flex flex-column flex-md-row align-items-md-center justify-content-md-center gap-md-3 text-md-start mt-4 mb-4">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:mohankrishna28803@gmail.com"
              className="contact-link"
            >
              mohankrishna28803@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:7799643499" className="contact-link">
              7799643499
            </a>
          </p>

          <p className="contact-link">
            <strong className="text-white">Location:</strong> Kadapa, Andhra
            Pradesh
          </p>
        </div>

        <div className="social-buttons ms-md-5 ps-md-4">
          <motion.a
            whileHover={{ scale: 1.3 }}
            href="https://github.com/mohan-krishna-reddy28"
            target="_blank"
            className="social-btn linkedin"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3 }}
            href="mailto:mohankrishna28803@gmail.com"
            className="social-btn github"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3 }}
            href="https://instagram.com/"
            target="_blank"
            className="social-btn email"
          >
            <MdEmail />
          </motion.a>
        </div>

        <div className="contact-form w-100">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="contact-form-modern"
            >
              <h3 className="theme-color">Message Sent Successfully! ✅</h3>
              <p className="text-white mt-3">
                Thank you for reaching out. I will get back to you soon!
              </p>
              <button
                className="button modern-btn mt-3"
                onClick={() => this.setState({ isSubmitted: false })}
              >
                Send Another Form
              </button>
            </motion.div>
          ) : (
            <>
              <h3 className="theme-color mb-3 text-center">Send a Message</h3>
              <form
                className="contact-form-modern"
                onSubmit={this.handleSubmit}
              >
                <div className="input-group-modern">
                  <input type="text" required />
                  <label>Your Name</label>
                </div>

                <div className="input-group-modern">
                  <input type="email" required />
                  <label>Your Email</label>
                </div>

                <div className="input-group-modern">
                  <textarea required></textarea>
                  <label>Your Message</label>
                </div>

                <div className="text-end button-container">
                  <motion.button
                    whileHover={{ scale: this.state.loading ? 1 : 1.1 }}
                    className="button modern-btn mt-3"
                    type="submit"
                    disabled={this.state.loading}
                  >
                    {this.state.loading ? (
                      <div class="wrapper">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </div>
              </form>
            </>
          )}
        </div>
      </motion.section>
    );
  }
}

export default Contact;

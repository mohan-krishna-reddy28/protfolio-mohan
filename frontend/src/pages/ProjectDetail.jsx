import { Component } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBrain,
  FaLock,
  FaUserShield,
  FaCookie,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiFramer,
  SiCloudinary,
  SiPython,
  SiDjango,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiPlotly,
} from "react-icons/si";
import { RiRouteLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import {
  GiArtificialIntelligence,
  GiBrain,
  GiTreeGrowth,
} from "react-icons/gi";

import "./styles.css";

// -----------------------------
// ICON MAPPINGS
// -----------------------------
const languageIcons = {
  HTML: (
    <FaHtml5
      className="tech-icon"
      style={{ color: "#E44D26" }}
      title="HTML"
      size={30}
    />
  ),
  CSS: (
    <FaCss3Alt
      className="tech-icon"
      style={{ color: "#1572B6" }}
      title="CSS"
      size={30}
    />
  ),
  JavaScript: (
    <SiJavascript
      className="tech-icon"
      style={{ color: "#F7DF1E" }}
      title="JavaScript"
      size={30}
    />
  ),
  "React.js": (
    <FaReact
      className="tech-icon"
      style={{ color: "#61DAFB" }}
      title="React.js"
      size={30}
    />
  ),
  "Node.js": (
    <FaNodeJs
      className="tech-icon"
      style={{ color: "#3C873A" }}
      title="Node.js"
      size={30}
    />
  ),
  "Express.js": (
    <SiExpress
      className="tech-icon"
      style={{ color: "#fff" }}
      title="Express.js"
      size={30}
    />
  ),
  MongoDB: (
    <SiMongodb
      className="tech-icon"
      style={{ color: "#4DB33D" }}
      title="MongoDB"
      size={30}
    />
  ),
  Python: (
    <SiPython
      className="tech-icon"
      style={{ color: "#3776AB" }}
      title="Python"
      size={30}
    />
  ),
  Django: (
    <SiDjango
      className="tech-icon"
      style={{ color: "#0C4B33" }}
      title="Django"
      size={30}
    />
  ),
};

const techIcons = {
  "State Management": (
    <FaBrain
      className="tech-icon"
      style={{ color: "#FFC400" }}
      title="State Management"
      size={30}
    />
  ),
  "Conditional Rendering": (
    <FaReact
      className="tech-icon"
      style={{ color: "#42A5F5" }}
      title="Conditional Rendering"
      size={30}
    />
  ),

  "React Popup": (
    <SiFramer
      className="tech-icon"
      style={{ color: "#00E5FF" }}
      title="React Popup"
      size={30}
    />
  ),

  "Styled Components": (
    <SiFramer
      className="tech-icon"
      style={{ color: "#DB7093" }}
      title="Styled Components"
      size={30}
    />
  ),

  Bootstrap: (
    <SiBootstrap
      className="tech-icon"
      style={{ color: "#7952B3" }}
      title="Bootstrap"
      size={30}
    />
  ),
  "Framer Motion": (
    <SiFramer
      className="tech-icon"
      style={{ color: "#0055FF" }}
      title="Framer Motion"
      size={30}
    />
  ),
  Cloudinary: (
    <SiCloudinary
      className="tech-icon"
      style={{ color: "#F18237" }}
      title="Cloudinary"
      size={30}
    />
  ),
  "TensorFlow / Keras": (
    <SiTensorflow
      className="tech-icon"
      style={{ color: "#FF6F00" }}
      title="TensorFlow / Keras"
      size={30}
    />
  ),
  CNN: (
    <GiArtificialIntelligence
      className="tech-icon"
      style={{ color: "#00E5FF" }}
      title="CNN Model"
      size={30}
    />
  ),
  LSTM: (
    <GiBrain
      className="tech-icon"
      style={{ color: "#C51162" }}
      title="LSTM Model"
      size={30}
    />
  ),
  "Random Forest": (
    <GiTreeGrowth
      className="tech-icon"
      style={{ color: "#2E7D32" }}
      title="Random Forest"
      size={30}
    />
  ),
  NumPy: (
    <SiNumpy
      className="tech-icon"
      style={{ color: "#4D77CF" }}
      title="NumPy"
      size={30}
    />
  ),
  Pandas: (
    <SiPandas
      className="tech-icon"
      style={{ color: "#150458" }}
      title="Pandas"
      size={30}
    />
  ),
  Matplotlib: (
    <SiPlotly
      className="tech-icon"
      style={{ color: "#00A8E8" }}
      title="Matplotlib"
      size={30}
    />
  ),
  "Machine Learning": (
    <FaBrain
      className="tech-icon"
      style={{ color: "#FFC107" }}
      title="Machine Learning"
      size={30}
    />
  ),
  "Deep Learning": (
    <GiArtificialIntelligence
      className="tech-icon"
      style={{ color: "#FF4081" }}
      title="Deep Learning"
      size={30}
    />
  ),
  "React Slick": (
    <FaReact
      className="tech-icon"
      style={{ color: "#61DAFB" }}
      title="React Slick"
      size={30}
    />
  ),
  Routing: (
    <RiRouteLine
      className="tech-icon"
      style={{ color: "#00E676" }}
      title="Routing"
      size={30}
    />
  ),
  Authentication: (
    <FaLock
      className="tech-icon"
      style={{ color: "#FF1744" }}
      title="Authentication"
      size={30}
    />
  ),
  Authorization: (
    <FaUserShield
      className="tech-icon"
      style={{ color: "#2979FF" }}
      title="Authorization"
      size={30}
    />
  ),
  "REST APIs": (
    <TbApi
      className="tech-icon"
      style={{ color: "#00BFA5" }}
      title="REST APIs"
      size={30}
    />
  ),
  Cookies: (
    <FaCookie
      className="tech-icon"
      style={{ color: "#FF9100" }}
      title="Cookies"
      size={30}
    />
  ),
};

// -----------------------------
// WITH PARAMS WRAPPER
// -----------------------------
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class ProjectDetail extends Component {
  state = {
    project: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchProjectFromDB();
  }

  fetchProjectFromDB = async () => {
    const { id } = this.props.params;

    try {
      const res = await fetch(`http://localhost:3000/projects/${id}`);
      const data = await res.json();

      if (data.success) {
        this.setState({ project: data.project, loading: false });
      } else {
        this.setState({ loading: false });
      }
    } catch (err) {
      console.error("Project fetch error:", err);
      this.setState({ loading: false });
    }
  };

  render() {
    const { project, loading } = this.state;

    if (loading)
      return <h2 className="text-white text-center mt-5">Loading...</h2>;

    if (!project)
      return <h2 className="text-white text-center mt-5">Project Not Found</h2>;

    return (
      <motion.div
        className="text-white mt-5 p-4 pt-5 mx-md-5 p-md-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link to="/projects" className="btn btn-outline-light mb-3">
          ← Back to Projects
        </Link>

        <div className="d-flex flex-column flex-md-row gap-5">
          <img src={project.image} className="detail-img" alt={project.name} />

          <div>
            <h2 className="theme-color">{project.name}</h2>
            <p className="text-secondary">{project.description}</p>

            <h4>Duration:</h4>
            <p className="text-info fw-bold">{project.duration}</p>
          </div>
        </div>

        {/* LANGUAGES */}
        <h4 className="mt-4">Languages Used:</h4>
        <div className="d-flex flex-wrap gap-3">
          {project.languages.map((lang, i) =>
            languageIcons[lang] ? (
              <div key={i} className="icon-box">
                {languageIcons[lang]}
              </div>
            ) : null
          )}
        </div>

        {/* TECH STACK */}
        <h4 className="mt-4">Tech Stack:</h4>
        <div className="d-flex flex-wrap gap-3">
          {project.tech.map((t, i) =>
            techIcons[t] ? (
              <div key={i} className="icon-box">
                {techIcons[t]}
              </div>
            ) : null
          )}
        </div>

        {/* TAGS */}
        <h4 className="mt-4">Tags:</h4>
        <div className="d-flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="simple-card-language">
              {tag}
            </span>
          ))}
        </div>

        {/* FEATURES */}
        <h4 className="mt-4">Features:</h4>
        <ul className="features-list">
          {project.features.map((f, i) => (
            <li className="list-items" key={i}>
              {f}
            </li>
          ))}
        </ul>

        {/* CHALLENGES */}
        <h4 className="mt-4">Challenges:</h4>
        <ul className="features-list">
          {project.challenges.map((c, i) => (
            <li key={i} className="list-items">
              {c}
            </li>
          ))}
        </ul>

        {/* FUTURE */}
        <h4 className="mt-4">Future Enhancements:</h4>
        <ul className="features-list">
          {project.future.map((f, i) => (
            <li className="list-items" key={i}>
              {f}
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="mt-4 d-flex gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="button action-button"
              rel="noreferrer"

            >
              Live Demo <FaExternalLinkAlt />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            className="button action-button"
            rel="noreferrer"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </motion.div>
    );
  }
}

export default withParams(ProjectDetail);

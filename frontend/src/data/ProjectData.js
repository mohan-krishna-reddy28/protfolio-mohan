const ProjectData = [
  {
    id: 1,
    name: "Portfolio Website",
    image:
      "https://res.cloudinary.com/dyfu3aiar/image/upload/v1764687529/portfolio_cmbap8.png",

    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    tech: ["Framer Motion", "Cloudinary", "Bootstrap"],
    tags: ["React", "Express", "Animations", "Portfolio", "MongoDB"],

    duration: "15 Days (Nov 2025 - Dec 2025)",
    role: "Full-Stack Developer",

    features: [
      "Fully responsive UI",
      "Smooth page transitions using Framer Motion",
      "Working contact form with Node.js backend",
      "MongoDB data storage",
      "Popup Resume viewer",
      "Neon cyber-grid themed design",
    ],

    challenges: [
      "Solved CORS issue between frontend and backend",
      "Managed environment variables securely",
      "Improved form validation & loader handling",
    ],

    future: [
      "Add Admin Dashboard",
      "Add Projects Filter & Search",
      "Enable Dark/Light Theme",
    ],

    description:
      "A fully responsive personal portfolio website built using React.js with smooth page transitions powered by Framer Motion. Includes sections like Home, About, Skills, Projects, Internships, Certificates, and Contact. Backend built with Node.js + MongoDB to store contact form messages. Uses Cloudinary for image hosting and glassmorphism UI elements.",

    github: "https://github.com/mohan-krishna-reddy28/portfolio-react",
  },
  {
    id: 2,
    name: "Real-Time Sleep Disorder Detection",
    image:
      "https://res.cloudinary.com/dyfu3aiar/image/upload/v1764944274/Screenshot_2025-12-05_194442_m3kqtl.png",

    languages: ["Python", "HTML", "CSS", "JavaScript", "Django"],

    tech: [
      "TensorFlow / Keras",
      "CNN",
      "LSTM",
      "Random Forest",
      "Django",
      "NumPy",
      "Deep Learning",
      "Pandas",
      "Matplotlib",
    ],

    tags: ["Deep Learning", "CNN", "LSTM", "Machine Learning", "Health AI"],

    duration: "90 Days (Nov 2025 – Feb 2025)",

    features: [
      "Real-time classification of sleep disorders",
      "Neural network model built using CNN + LSTM",
      "User-friendly Django interface",
      "Graph visualization of sleep metrics",
      "Automatic report generation with predictions",
      "Supports multiple sleep data formats (CSV, XLSX)",
    ],

    challenges: [
      "Preprocessing large sleep datasets with missing values",
      "Training LSTM model with long time-series data",
      "Balancing dataset across multiple sleep disorder classes",
      "Integrating ML model into Django without latency issues",
    ],

    future: [
      "Deploy the system using AWS",
      "Add user authentication dashboard",
      "Add mobile-friendly responsive UI",
      "Integrate wearable device sensor data",
    ],

    description:
      "A deep learning-based system for detecting and classifying sleep disorders in real-time. Built using CNN and LSTM architectures to analyze time-series sleep data. The Random Forest model further enhances prediction accuracy. The project includes a Django-based interface that allows users to upload data, view graphs, and receive predictions along with precautions and recommendations.",

    live: "https://your-sleepdisorder-live-demo.com",
    github: "https://github.com/mohan-krishna-reddy28/Sleep_Disorder_Detection",
  },
  {
    id: 3,
    name: "Insta Share App",
    image:
      "https://res.cloudinary.com/dyfu3aiar/image/upload/v1764946420/Screenshot_2025-12-05_202027_xadh33.png",

    languages: ["HTML", "CSS", "JavaScript", "React.js"],

    tech: [
      "React Slick",
      "Routing",
      "Authentication",
      "Authorization",
      "REST APIs",
      "Cookies",
    ],

    tags: [
      "React",
      "Authentication",
      "Class Components",
      "REST API",
      "Responsive UI",
    ],

    duration: "10 Days (Nov 2025)",
    
    features: [
      "User authentication using JWT token",
      "Fetching stories & posts from backend APIs",
      "User-friendly responsive UI for all devices",
      "Like/Unlike post functionality",
      "Search posts feature with live API integration",
      "Profile page for logged-in user",
      "View other users' profiles using dynamic routes",
      "React Slick carousel for user stories",
      "Client-side routing with protected routes",
      "Loader states and failure views for all API calls",
    ],

    challenges: [
      "Managing authentication & protected routes using JWT token",
      "Handling loading, success, and failure API states",
      "Implementing search functionality with edge cases",
      "Ensuring responsive UI using CSS-only (no styled-components)",
      "Integrating React Slick & customizing arrow buttons",
      "Handling Like/Unlike without actual database persistence",
    ],

    future: [
      "Add real backend with persistent data",
      "Enable adding new posts with image upload",
      "Improve animations & transitions",
      "Add notifications and DM features",
    ],

    description:
      "A complete Instagram-like social media application built using React.js class components. The app includes authentication, authorization, protected routes, responsive UI, user profiles, story slideshow using React Slick, like/unlike interactions, search posts, and error handling. All data is fetched from internal APIs, showcasing strong skills in lifecycle methods, API integration, and state management.",
    live: "https://instasharemohan.ccbp.tech",
    github: "https://github.com/mohan-krishna-reddy28/insta_share",
  },
];

export default ProjectData;
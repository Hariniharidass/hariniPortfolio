import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Search from "../components/Search";
function Projects() {
  const initialProjectsArray = [
    {
      projectName: "Dockerized Multi-Calculator Microservice",
      repoLink: "https://github.com/Hariniharidass/Simple_Python_Microservices",
      date: "May 2026 – June 2026",
      techUsed: ["all", "Python", "FastAPI", "Docker", "Docker Compose", "Pydantic", "unittest"],
      description: "Developed a containerized REST API for mathematical calculations and loan amortization, incorporating data validation, error handling, middleware, structured logging, and automated testing.",
      details: ["Asynchronous REST API endpoints for mathematical calculations and loan amortization.", "Docker and Docker Compose configuration.", "Pydantic request and response validation.", "CORS middleware and request timeout protection.", "Structured logging.", "Unit and integration tests using Python unittest."],
    },
    {
      projectName: "Körklart — Swedish Driving License Guide",
      category: "Mobile application",
      repoLink: "https://github.com/Hariniharidass/Korklart-app",
      techUsed: ["all", "TypeScript", "React Native", "Expo", "AsyncStorage"],
      description: "A mobile guide to the Swedish driving-license process, with a step-by-step checklist, saved progress, and remaining-cost estimates.",
      details: ["Mark individual steps as complete and save progress locally with AsyncStorage.", "Calculate remaining fixed and estimated variable costs from incomplete steps.", "Open official resources from each checklist step."],
    },
    {
      projectName: "Shopping Cart — Express & MongoDB",
      category: "Fullstack web application",
      repoLink: "https://github.com/Hariniharidass/Shopping-cart-ExpressJS-Mongodb",
      techUsed: ["all", "JavaScript", "Node.js", "Express.js", "MongoDB", "Handlebars"],
      description: "A server-rendered shopping application using Express, Handlebars, and MongoDB, with product search, a session-based cart, and order storage.",
      details: ["Search the product catalog and adjust or remove cart items.", "Add and update products with image uploads.", "Use login-protected checkout and save orders in MongoDB."],
    },
    {
      projectName: "Cookie Clicker",
      liveLink: "https://hariniharidass.github.io/CookieClicker/",
      repoLink: "https://github.com/Hariniharidass/CookieClicker",
      techUsed: ["all", "TAILWIND", "REACT"],
      description:
        "Cookie Clicker game built with React and Tailwind CSS. It features user authentication (login and registration), profile avatar selection, and background music, all integrated into a classic incremental clicking game experience.",
      details: [
        " Navigation Bar: Provides intuitive navigation and displays user login status, username, and profile picture. It includes a toggle for background music and logout functionality.",
        " User Authentication: Log in and register to save your game progress locally using localStorage.",
        " Profile Avatars: Choose a unique avatar during registration from a selection fetched from the DiceBear API.",
        "  Background Music: Enjoy optional background music during gameplay, with toggle functionality.",
        " Cookie Clicker Gameplay: The core mechanic involves clicking a large cookie to generate more cookies. Spend earned cookies on various upgrades to increase cookie production rate. ",
      ],
    },
    {
      projectName: "Guessing Game",
      liveLink: "https://hariniharidass.github.io/GuessingGame/",
      repoLink: "https://github.com/Hariniharidass/GuessingGame",
      techUsed: ["all", "TAILWIND", "REACT"],
      description:
        " A modern, responsive web application built with React that allows users to predict the nationality associated with a given name by leveraging an external API. ",
      details: [
        "Guess nationality from a last name using the nationalize.io API.",
        "User Authentication with SignUp and SignIn forms ",
        "Credentials stored in localStorage for demo purposes",
        "Navbar adapts, showing login/register for guests and a welcome/logout for logged-in users",
        "Seamless page transitions using React Router DOM ",
        "Dynamic navigation and responsive design",
      ],
    },
    {
      projectName: "Responsive Navigation",
      liveLink: "https://hariniharidass.github.io/Responsive-navigation/",
      repoLink: "https://github.com/Hariniharidass/Responsive-navigation",
      techUsed: ["all", "HTML", "SASS", "JAVASCRIPT"],
      description:
        "A webpage for event organiser with different pages using responsive navigation.",
      details: [
        "Used hamburger menu for navigation in small devices",
        "All links on the page is accessible at all screen sizes",
        "Implemented SASS, semantic HTML",
        "Used normalize.css",
      ],
    },
  ];

  const [filteredProjects, setFilteredProjects] =
    useState(initialProjectsArray);

  //To handle search results and display projects
  const handleSearch = (results) => {
    setFilteredProjects(results);
  };

  return (
    <div className="page-shell">
      <header className="page-heading">
      <p className="eyebrow">Selected work</p>
      <h1>Projects</h1>
      <p className="page-intro">From interactive frontend applications to containerized backend APIs.</p>
      </header>
      <Search projects={initialProjectsArray} onSearch={handleSearch} />

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.projectName}
            date={project.date}
            category={project.category}
            projectName={project.projectName}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
            techUsed={project.techUsed}
            description={project.description}
            details={project.details}
          />
        ))}
      </div>
      <p role="status" className="muted">{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} found</p>
    </div>
  );
}

export default Projects;

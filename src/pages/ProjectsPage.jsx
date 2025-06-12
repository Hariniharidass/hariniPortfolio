import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Search from "../components/Search";
import ParticlesBackground from "../components/ParticlesBackground";
function Projects() {
  const initialProjectsArray = [
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
    <div className="mt-30 flex justify-center items-center flex-col relative overflow-hidden min-h-screen">
      <ParticlesBackground />
      <Search projects={initialProjectsArray} onSearch={handleSearch} />

      <div>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
            techUsed={project.techUsed}
            description={project.description}
            details={project.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

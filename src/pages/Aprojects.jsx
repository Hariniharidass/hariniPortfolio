import React, { useState } from "react";
import ProjectCard from "/src/components/Acard.jsx";
import formImage from "../assets/images/Duck-form.png";
import cssSvgImage from "../assets/images/invitation.png";
import responsiveNavigation from "../assets/images/responsiveNav.png";
import invite from "../assets/videos/bdInvite.mp4";
import form from "../assets/videos/form.mp4";
import party from "../assets/videos/party.mp4";
import Search from "../components/Search";

function Aprojects() {
  const initialProjectsArray = [
    {
      projectName: "Forms",
      liveLink: "https://hariniharidass.github.io/GuessingGame/",
      repoLink: "https://github.com/Hariniharidass/Html-forms",
      techUsed: ["HTML", "CSS"],
      description:
        "The webpage layout from figma as a form is converted to a HTML and CSS code",
      details: [
        "Used HTML form elements and validations",
        "Used with CSS attributes such as hover, focus",
        "Used normalize.css",
      ],
    },
    {
      projectName: "GuessingGame",
      liveLink: "https://hariniharidass.github.io/GuessingGame/",
      repoLink: "https://github.com/Hariniharidass/GuessingGame",
      techUsed: ["TAILWIND", "REACT"],
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
      techUsed: ["HTML", "SASS", "JAVASCRIPT"],
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
    setIsProjectsShown(true);
  };

  return (
    <div className="mt-10 flex justify-center items-center flex-col">
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

export default Aprojects;

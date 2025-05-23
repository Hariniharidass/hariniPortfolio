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
      repoLink: "https://github.com/Hariniharidass/Html-forms",
      techUsed: ["HTML", "CSS"],
      description:
        "The webpage layout from figma as a form is converted to a HTML and CSS code",
      details: [
        "Used HTML form elements and validations",
        "Used with CSS attributes such as hover, focus",
        "Used normalize.css",
      ],
      image: formImage,
      imgAltText: "duck-form-image",
      video: form,

    },
    {
      projectName: "CSS SVG Animations",
      repoLink: "https://github.com/Hariniharidass/SVG-CSS-animation",
      techUsed: ["HTML", "CSS"],
      description: "This is a single page website for a birthday invitation",
      details: [
        "3 SVG images created (clock, envelope, house)",
        "CSS animations with CSS transistion and @keyframe animation",
        "Included Animate.css",
        "Used normalize.css",
        "Used Google Fonts ",
      ],
      image: cssSvgImage,
      imgAltText: "css-svg-invitation",
      video: invite,

    },
    {
      projectName: "Responsive Navigation",
      repoLink: "https://github.com/Hariniharidass/Responsive-navigation",
      techUsed: ["HTML", "CSS", "SASS"],
      description:
        "A webpage for event organiser with different pages using responsive navigation.",
      details: [
        "Used hamburger menu for navigation in small devices",
        "All links on the page is accessible at all screen sizes",
        "Implemented SASS",
        "Modularised different components on the page for scalabilty",
        "Used normalize.css",
      ],
      image: responsiveNavigation,
      imgAltText: "responsive-navigation",
      video: party,
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
            techUsed={project.techUsed}
            description={project.description}
            details={project.details}
            image={project.image}
            imgAltText={project.imgAltText}
            video={project.video}
          />
        ))}
      </div>
    </div>
  );
}

export default Aprojects;

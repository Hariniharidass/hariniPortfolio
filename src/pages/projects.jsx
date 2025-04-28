import React, { useState } from "react";
import ProjectCard from "/src/components/Card.jsx";
import formImage from "../assets/images/Duck-form.png";
import cssSvgImage from "../assets/images/invitation.png";
import responsiveNavigation from "../assets/images/responsiveNav.png";
import invite from "../assets/videos/bdInvite.mp4";
import form from "../assets/videos/form.mp4";
import party from "../assets/videos/party.mp4";
import card from "../components/Card";
function projects() {
  const [isProjectsShown, setIsProjectsShown] = useState(false);
  const [isAnyPopUpOpen, setIsAnyPopUpOpen] = useState(false);

  const toggleButton = () => {
    setIsProjectsShown(!isProjectsShown);
  };
  const handlePopUpOpen = () => {
    setIsAnyPopUpOpen(true);
  };
  const handlePopUpClose = () => {
    setIsAnyPopUpOpen(false);
  };

  return (
    <div className="mt-10 flex justify-center items-center flex-col">
      <button
        type="button"
        onClick={toggleButton}
        className="text-black text-2xl rounded-2xl m-4 p-6 bg-white cursor-pointer border-4 border-black hover:bg-black hover:text-white "
        style={{ display: isAnyPopUpOpen ? "none" : "block" }}
      >
        {" "}
        View Projects
      </button>
      <div
        className={`relative z-10 p-4 flex flex-col items-center ${
          isProjectsShown ? "flex" : "hidden"
        }`}
      >
        <ProjectCard
          projectName="Forms"
          repoLink="https://github.com/Hariniharidass/Html-forms"
          techUsed={["HTML", "CSS"]}
          description="The webpage layout from figma as a form is converted to a HTML and CSS code"
          details={[
            "Used HTML form elements and validations",
            "Used with CSS attributes such as hover, focus",
            "Used normalize.css",
          ]}
          image={formImage}
          imgAltText="duck-form-image"
          video={form}
          onPopUpOpen={handlePopUpOpen}
          onPopUpClose={handlePopUpClose}
        />
        <ProjectCard
          projectName="CSS SVG Animations"
          repoLink="https://github.com/Hariniharidass/SVG-CSS-animation"
          techUsed={["HTML", "CSS"]}
          description="This is a single page website for a birthday invitation"
          details={[
            "3 SVG images created (clock, envelope, house)",
            "CSS animations with CSS transistion and @keyframe animation",
            "Included Animate.css",
            "Used normalize.css",
            "Used Google Fonts ",
          ]}
          image={cssSvgImage}
          imgAltText="css-svg-invitation"
          video={invite}
          onPopUpOpen={handlePopUpOpen}
          onPopUpClose={handlePopUpClose}
        />
        <ProjectCard
          projectName="Responsive Navigation"
          repoLink="https://github.com/Hariniharidass/Responsive-navigation"
          techUsed={["HTML", "CSS", "SASS"]}
          description="A webpage for event organiser with different pages using responsive navigation."
          details={[
            "Used hamburger menu for navigation in small devices",
            "All links on the page is accessible at all screen sizes",
            "Implemented SASS",
            "Modularised different components on the page for scalabilty",
            "Used normalize.css",
          ]}
          image={responsiveNavigation}
          imgAltText="responsive-navigation"
          video={party}
          onPopUpOpen={handlePopUpOpen}
          onPopUpClose={handlePopUpClose}
        />
      </div>
    </div>
  );
}

export default projects;

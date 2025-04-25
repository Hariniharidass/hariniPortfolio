import React from "react";
import ProjectCard from "/src/components/projectCard.jsx";
import formImage from "../assets/images/Duck-form.png";
import cssSvgImage from "../assets/images/invitation.png";
import responsiveNavigation from "../assets/images/responsiveNav.png";
function projects() {
  return (
    <div className="relative z-10 p-4 flex flex-col items-center">
      <button>Projects</button>
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
      />
      <ProjectCard
        projectName="Responsive Navigation"
        repoLink="https://github.com/Hariniharidass/Responsive-navigation"
        techUsed={["HTML", "SASS"]}
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
      />
    </div>
  );
}

export default projects;

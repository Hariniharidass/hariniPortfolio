import ProjectCard from "../src/components/projectCard.jsx";
import formImage from "./assets/images/Duck-form.png";
import cssSvgImage from "./assets/images/invitation.png";
import responsiveNavigation from "./assets/images/responsiveNav.png";
function App() {
  return (
    <>
      <ProjectCard
        projectName="Forms"
        repoLink="https://github.com/Hariniharidass/Html-forms"
        techUsed={["HTML", "CSS"]}
        details="A simple HTML form with validation and flexbox"
        image={formImage}
        imgAltText="duck-form-image"
      />
      <ProjectCard
        projectName="CSS SVG Animations"
        repoLink="https://github.com/Hariniharidass/SVG-CSS-animation"
        techUsed={["HTML", "CSS"]}
        details=" A birthday inviation card using CSS SVG animations "
        image={cssSvgImage}
        imgAltText="css-svg-invitation"
      />
      <ProjectCard
        projectName="Responsive Navigation"
        repoLink="https://github.com/Hariniharidass/Responsive-navigation"
        techUsed={["HTML", "SASS"]}
        details="A webpage for event organiser with different pages using responsive naigation"
        image={responsiveNavigation}
        imgAltText="responsive-navigation"
      />
    </>
  );
}

export default App;

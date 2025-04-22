import React from "react";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { SiSass } from "react-icons/si";
import "../components/projectCard.css";
/**
 *
 * Create atleast 3 components, these components will represent your previous projects. Each component will include these props:

Name

Screenshot

Github repo

Tech used

A short write-up

What the project does

What you learned

Your role (if it was collaborative)

Challenges you solved
 */

techIconMap = {
  HTML: <DiHtml5 size="50px" />,
  CSS: <DiCss3 size="50px" />,
  SASS: <SiSass size="50px" />,
};
function projectCard(props) {
  const techIcon = techIconMap[props.techUsed] || null;
  return (
    <>
      <div className="project-container">
        <div className="desc-container">
          <h2 className="project-title">{props.projectName}</h2>
          <a
            className="project-repo"
            href={props.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repository
          </a>
          {techIcon}
        </div>
        <div className="desc-container">
          <img
            className="project-image"
            src={props.image}
            alt={props.imgAltText}
          />
        </div>
        <div className="desc-container">
          <p className="project-detail">{props.details}</p>
        </div>
      </div>

      {/*    <h2>{Name}</h2>
          <img src={Screenshot} alt="project" />
          <h4>{GithubRepo}</h4>
          <h5>{TechUsed}</h5>
          <p>{Description }</p> */}
    </>
  );
}

export default projectCard;

import React from "react";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { DiSass, DiGithubBadge } from "react-icons/di";
import "../components/projectCard.css";

const techIconMap = {
  HTML: <DiHtml5 size="50px" color="#ff5733" />,
  CSS: <DiCss3 size="50px" color="#2965f1" />,
  SASS: <DiSass size="50px" color=" #CD6799" />,
};

function projectCard(props) {
  const techIcons = props.techUsed
    ? props.techUsed.map((tech, index) => (
        <span key={index}> {techIconMap[tech] || null}</span>
      ))
    : [];

  return (
    <>
      <div className="flex flex-row justify-center items-center m-4 p-2 rounded">
        <div className="desc-container">
          <h2 className="text-4xl font-bold">{props.projectName}</h2>
          <a
            className="project-repo"
            href={props.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click <DiGithubBadge size="50px" /> for Github Repository
          </a>
          <div className="project-tech">Tech Used : {techIcons}</div>
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

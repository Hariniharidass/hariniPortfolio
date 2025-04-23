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
  const techIcons = props.techUsed ? (
    <div className="flex flex-row items-center m-2 p-1">
      {props.techUsed.map((tech, index) => (
        <span className="m-2 p-1" key={index}>
          {techIconMap[tech] || null}
        </span>
      ))}
    </div>
  ) : null;

  return (
    <>
      <div className="lg:flex lg:flex-row justify-center items-center m-3 p-2 rounded-2xl border-2 border-solid border-black shadow-md  md:flex-col md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center text-center text-white">
        <h2 className="text-4xl font-bold m-4 p-2 md:flex-col sm:flex-col md:max-w-full sm:max-w-full lg:flex-grow">
          {props.projectName}
        </h2>
        <img
          className="rounded-xl m-2 border-black-700 border-2 block mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
          src={props.image}
          alt={props.imgAltText}
        />

        <div className=" inline-flex text-xl flex-col justify-center items-center m-2 p-2 lg:w-1/2 w-full">
          <span className="text-center sm:inline">Github Repository</span>
          <a
            className=" m-2 p-4 hover:text-blue-500 md:flex-col sm:flex-col"
            href={props.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiGithubBadge
              size="50px"
              color="black"
              className="mr-2 md:mr-4 mx-auto block"
            />{" "}
            {/* Center the icon */}
          </a>

          <span className="text-center sm:inline"> Tech Used</span>
          <div className="flex flex-row items-center justify-center m-2 p-1 w-full">
            {" "}
            {/* Center icons in row */}
            {techIcons}
          </div>
        </div>

        <div className="flex-col justify-center items-center m-2 p-2 lg:w-1/3 w-full">
          <p className="text-center text-2xl">{props.details}</p>
        </div>
      </div>
    </>
  );
}

export default projectCard;

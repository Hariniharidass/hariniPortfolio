import React, { useState } from "react";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { DiSass, DiGithubBadge } from "react-icons/di";
import { FaFolderOpen } from "react-icons/fa";
import { FaFolderClosed } from "react-icons/fa6";
import PopUp from "../components/PopUp";
const techIconMap = {
  HTML: <DiHtml5 size="50px" color="#ff5733" />,
  CSS: <DiCss3 size="50px" color="#2965f1" />,
  SASS: <DiSass size="50px" color=" #CD6799" />,
};

function Card(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const [popUpInfo, setPopUpInfo] = useState({
    description: props.description,
    repoLink: props.repoLink,
    video: props.video,
  });
  const techIcons = props.techUsed ? (
    <div className="flex flex-row items-center m-2 p-1">
      {props.techUsed.map((tech, index) => (
        <span className="m-2 p-1" key={index}>
          {techIconMap[tech] || null}
        </span>
      ))}
    </div>
  ) : null;

  const openCard = () => {
    setIsOpen(!isOpen);
  };
  const openPopUp = () => {
    setIsPopUpVisible(true);
    props.onPopUpOpen();
  };

  const closePopUp = () => {
    setIsPopUpVisible(false);
    props.onPopUpClose();
  };

  return (
    <div className="m-3">
      <div className="flex flex-row sm:inline-flex justify-start items-center">
        <h2
          className="font-bold
          m-4
          p-2
          flex-row
          lg:flex-col
          md:max-w-full
          md:text-2xl
          sm:max-w-full
          lg:flex-grow
          text-xl"
        >
          {props.projectName}
        </h2>

        <FaFolderOpen
          size="50px"
          className={`${
            isOpen ? "inline-flex" : "hidden"
          } cursor-pointer  md:mr-10 mr-3`}
          onClick={openCard}
        />
        <FaFolderClosed
          size="50px"
          className={` ${
            isOpen ? "hidden" : "inline-flex"
          } cursor-pointer  md:mr-10 mr-3`}
          onClick={openCard}
        />

        <button
          type="button"
          className={` ${
            isPopUpVisible ? "hidden" : "inline-flex"
          } cursor-pointer border-1 ml-6 p-3 bg-white text-black rounded hover:bg-black hover:text-white`}
          onClick={openPopUp}
        >
          Open Demo
        </button>

        {isPopUpVisible && (
          <PopUp
            description={popUpInfo.description}
            repoLink={popUpInfo.repoLink}
            video={popUpInfo.video}
            onClick={closePopUp}
          />
        )}
      </div>
      <div className={` ${isOpen ? "block" : "hidden"} m-3 w-dvw`}>
        <div className="bg-gray-300 lg:flex lg:flex-row justify-center items-center  p-4 mt-4 border-white-600 shadow-md  md:flex-col md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center text-center text-black">
          <img
            className="rounded-xl m-2 block mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
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
              />
            </a>

            <span className="text-center sm:inline"> Tech Used</span>
            <div className="flex flex-row items-center justify-center m-2 p-1 w-full">
              {techIcons}
            </div>
          </div>
          <div className="flex-col justify-center items-center m-2 p-2 lg:w-2/3 w-full">
            <p className="font-bold text-center text-2xl">Description </p>
            <p className="text-center text-xl m-2 p-1 ">{props.description}</p>
            <ul className="list-disc">
              {props.details.map((detail, index) => (
                <li className=" mx-auto text-m text-left  w-full " key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

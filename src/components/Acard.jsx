import { DiHtml5, DiCss3 } from "react-icons/di";
import { DiSass, DiGithubBadge } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
const techIconMap = {
  HTML: <DiHtml5 size="30px" color="#ff5733" />,
  CSS: <DiCss3 size="30px" color="#2965f1" />,
  SASS: <DiSass size="30px" color=" #CD6799" />,
  JAVASCRIPT: <IoLogoJavascript size="30px" color=" #000000" />,
  TAILWIND: <RiTailwindCssFill size="30px" color=" #06B6D4" />,
  REACT: <FaReact size="30px" color=" #61DAFB" />,
  GITHUB: <DiGithubBadge size="30px" color="#000000" />,
};

function Acard(props) {
  const techIcons = props.techUsed ? (
    <div className="flex flex-row items-center ml-1.5 ">
      {props.techUsed.map((tech, index) => (
        <span className="m-2 p-1 rounded-3xl" key={index}>
          {techIconMap[tech] || null}
        </span>
      ))}
    </div>
  ) : null;

  return (
    <div className="m-3">
      <div className="flex flex-col justify-start items-center w-full ">
        <details className="w-full m-4 border-4 border-gray-300 rounded-lg shadow-lg bg-gray-100 overflow-hidden">
          <summary className=" lg:text-xl text-lg font-bold cursor-pointer py-4 bg-gray-300 w-full  flex items-center text-center border-b-4 border-gray-300">
            <span className="flex-grow text-center">{props.projectName}</span>
          </summary>
          <div className="md:grid md:grid-cols-3 place-items-center flex flex-col items-center">
            <div className="inline-grid">
              {props.repoLink && (
                <div className="lg:text-2xl text-lg mt-6">
                  <a
                    href={props.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-600 hover:text-blue-500"
                  >
                    GitHub Repository{" "}
                    <DiGithubBadge
                      size="40px"
                      className="ml-2 inline text-black"
                    />{" "}
                  </a>
                </div>
              )}
            </div>
            <div className="inline mt-6">
              <div className="lg:text-2xl text-lg">
                <a
                  href={props.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 hover:text-blue-500"
                >
                  Live Demo{" "}
                </a>
              </div>
            </div>
            <div className="inline mt-6">
              {techIcons && (
                <div className=" lg:text-2xl  text-lg flex items-center justify-center ">
                  Tech: {techIcons}
                </div>
              )}
            </div>
            <div className="col-span-3">
              {props.description && (
                <div className="mt-4 text-center">
                  <p className="font-semibold lg:text-lg text-base">
                    Description:
                  </p>
                  <p className="mt-2 lg:text-lg text-base">
                    {" "}
                    {props.description}
                  </p>
                </div>
              )}
            </div>
            <div className="col-span-3">
              {props.details && props.details.length > 0 && (
                <div className="mt-4 text-center my-3">
                  <p className="font-semibold lg:text-l text-base">
                    Key Details:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 lg:text-lg text-base">
                    {props.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}

export default Acard;

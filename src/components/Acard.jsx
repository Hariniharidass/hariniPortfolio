import { DiHtml5, DiCss3 } from "react-icons/di";
import { DiSass, DiGithubBadge } from "react-icons/di";

const techIconMap = {
  HTML: <DiHtml5 size="50px" color="#ff5733" />,
  CSS: <DiCss3 size="50px" color="#2965f1" />,
  SASS: <DiSass size="50px" color=" #CD6799" />,
  GITHUB: <DiGithubBadge size="50px" color="#6e5494" />,
};

function Acard(props) {
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
    <div className="m-3">
      <div className="flex flex-col justify-start items-center w-full">
        <details className="w-full m-4 border border-gray-300 rounded-lg shadow-lg bg-gray-300 overflow-hidden">
          <summary className=" text-xl font-bold cursor-pointer py-4 bg-gray-100 w-full  flex items-center text-center">
            <span className="flex-grow text-center">{props.projectName}</span>
          </summary>
          <div className="grid grid-cols-2">
            <div>
              {props.repoLink && (
                <p className="text-2xl">
                  <a
                    href={props.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    GitHub Repository{" "}
                    <DiGithubBadge size="50px" className="ml-2" />{" "}
                  </a>
                </p>
              )}
            </div>
            <div className="justify-center items-center border-2">
              {techIcons && (
                <div className="mt-4 text-center inline-grid ">
                  <p className="font-semibold">Technologies Used:</p>
                  <p className="mt-2"> {techIcons}</p>
                </div>
              )}
            </div>
            <div className="col-span-2">
              {props.description && (
                <div className="mt-4 text-center">
                  <p className="font-semibold">Description:</p>
                  <p className="mt-2"> {props.description}</p>
                </div>
              )}
            </div>
            <div className="col-span-2">
              {props.details && props.details.length > 0 && (
                <div className="mt-4 text-center">
                  <p className="font-semibold">Key Details:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 ">
                    {props.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="col-span-2">
              {props.image && (
                <img
                  src={props.image}
                  alt={props.imgAltText}
                  className="mt-4 max-w-full h-auto rounded-md"
                />
              )}
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}

export default Acard;

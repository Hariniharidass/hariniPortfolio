import persononpeak from "../../public/images/persononpeak.jpg";
import workingwoman from "../../public/images/workingwoman.jpg";
import performance from "../../public/images/performance.jpg";
import react from "../../public/images/reacttech.jpg";
import resilient from "../../public/images/resilient.jpg";
import teamwork from "../../public/images/teamwork.jpg";
import techskills from "../../public/images/techskills.jpg";
import continuouslearning from "../../public/images/continuouslearning.jpg";
function about() {
  return (
    <div className="flex flex-col justify-center items-center my-20 text-2xl">
      <h1>Get to know me...</h1>
      <div className="grid gap-5">
        <div className="grid grid-cols-3 m-4 p-2  bg-gray-300 ">
          <div className="self-center col-span-3 bg-[url('/images/persononpeak.jpg')] h-120 w-full bg-cover bg-center">
            <p className=" md:my-5 md:text-3xl text-xl text-center text-white">
              I'm a dedicated Frontend Developer resuming my career journey with
              renewed energy and a deep passion for creating exceptional web
              experiences.
            </p>
          </div>
          {/*  <div className="justify-self-center">
            <img
              className="md:w-70 md:h-70 w-30 h-30"
              src={persononpeak}
              alt="a person climbing on a peak"
            />
          </div> */}
        </div>
        <div className="grid grid-cols-3 m-4 p-2">
          <div className="justify-self-center">
            <img
              className="md:w-70 md:h-70 w-30 h-30"
              src={workingwoman}
              alt="typing on a laptop"
            />
          </div>
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Practical experience in developing full-stack web applications.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 m-4 p-2  bg-gray-300">
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Master's thesis at Axis Communications focused on web performance
              optimization.
            </p>
          </div>
          <div className="justify-self-center">
            <img
              className="md:w-70 md:h-70 w-30 h-30"
              src={performance}
              alt="a person climbing on a peak"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 m-4 p-2 ">
          <div className="justify-self-center">
            <img
              className="md:w-70 md:h-70 w-30 h-30"
              src={react}
              alt="a person climbing on a peak"
            />
          </div>
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Actively expanding skills in modern frontend technologies like
              React.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 m-4 p-2  bg-gray-300">
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Maintained technical edge through continuous learning during a
              career break.
            </p>
          </div>
          <div className="justify-self-center">
            <img
              className="md:w-70 md:h-70 w-30 h-30"
              src={continuouslearning}
              alt="a person climbing on a peak"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 m-4 p-2">
          <div className="justify-self-center">
            <img
              className="md:w-70 md:h-70 w-30 h-30"
              src={resilient}
              alt="a person climbing on a peak"
            />
          </div>
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Adaptable, resilient, and possessing strong time management
              skills.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 m-4 p-2  bg-gray-300">
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Proven technical skills in HTML, CSS, JavaScript, NodeJS, and
              RESTful APIs.
            </p>
          </div>
          <div className="justify-self-center">
            <img
              className="md:w-70 md:h-70 w-30 h-30"
              src={techskills}
              alt="a person climbing on a peak"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 m-4 p-2 ">
          <div className="justify-self-center">
            <img
              className="md:w-70 md:h-70 w-30 h-30"
              src={teamwork}
              alt="a person climbing on a peak"
            />
          </div>
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Driven to contribute effectively and collaborate within teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;

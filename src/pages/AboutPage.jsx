import { motion } from "motion/react";
import developer from "../../public/images/developer.png";
import workingwoman from "../../public/images/workingwoman.jpg";
import performance from "../../public/images/performance.jpg";
import react from "../../public/images/reacttech.jpg";
import resilient from "../../public/images/resilient.jpg";
import teamwork from "../../public/images/teamwork.jpg";
import techskills from "../../public/images/techskills.jpg";
import continuouslearning from "../../public/images/continuouslearning.jpg";
import linkedin from "../../public/images/linkedin.png";
import github from "../../public/images/github.png";

const containerVariants = {
  visible: {
    opacity: 1,
  },
};

const imageChildVariants = {
  hidden: { scale: 0.5, opacity: 1, rotate: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function About() {
  const githubLink = "https://github.com/Hariniharidass";
  const linkedinLink =
    "https://www.linkedin.com/in/harini-natarajan-854b9510a/";
  return (
    <div className="flex flex-col justify-center items-center my-20 md:text-2xl text-sm mt-15 text-text-primary bg-background-primary">
      <div className="w-full inline-flex justify-evenly items-center h-fit bg-background-primary">
        <h1 className="md:text-2xl text-sm text-text-primary">Get to know me...</h1>{" "}
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="md:w-12 md:h-12  w-6 h-6 "
            src={linkedin}
            alt="LinkedIn Logo"
          />
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="md:w-12 md:h-12  w-6 h-6 bg-white"
            src={github}
            alt="Github Logo"
          />
        </a>
      </div>
      <div className="grid gap-5">
        <motion.div
          className="grid grid-cols-3 m-4 p-2  bg-background-secondary "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="self-center col-span-2 w-full ">
            <p className="col-span-2 md:my-5 md:text-3xl text-xl text-center">
              I'm a dedicated Frontend Developer resuming my career journey with
              renewed energy and a deep passion for creating exceptional web
              experiences.
            </p>
          </div>
          <motion.div
            className="justify-self-center bg-background-secondary"
            variants={imageChildVariants}
          >
            <img
              className="md:w-70 md:h-70 w-30 h-30 rounded-full "
              src={developer}
              alt="female developer"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 m-4 p-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="justify-self-center"
            variants={imageChildVariants}
          >
            <img
              className="md:w-70 md:h-70 w-30 h-30 rounded-full"
              src={workingwoman}
              alt="typing on a laptop"
            />
          </motion.div>
          <div className="self-center col-span-2 ">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Practical experience in developing full-stack web applications.
              Worked at DASC as Frontend developer.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 m-4 p-2  bg-background-secondary"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Master in Computer Science from Malmö University. Master's thesis
              at Axis Communications focused on web performance optimization.
            </p>
          </div>
          <motion.div
            className="justify-self-center"
            variants={imageChildVariants}
          >
            <img
              className="md:w-70 md:h-70 w-30 h-30 rounded-full"
              src={performance}
              alt="graph showing performance"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 m-4 p-2 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="justify-self-center"
            variants={imageChildVariants}
          >
            <img
              className="md:w-70 md:h-70 w-30 h-30 rounded-full"
              src={react}
              alt="React tech"
            />
          </motion.div>
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              IT Frontend Developement Course from Sundsgården Folkhögskola,
              Helsingborg. Actively refining and expanding skills in modern
              frontend technologies like React.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 m-4 p-2  bg-background-secondary"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Driven to contribute effectively and collaborate within teams.
            </p>
          </div>
          <motion.div
            className="justify-self-center"
            variants={imageChildVariants}
          >
            <img
              className="md:w-70 md:h-70 w-30 h-30 rounded-full"
              src={teamwork}
              alt="two person as a team"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 m-4 p-2  "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="justify-self-center"
            variants={imageChildVariants}
          >
            <img
              className="md:w-70 md:h-70 w-30 h-30 rounded-full"
              src={continuouslearning}
              alt="developers workspace"
            />
          </motion.div>
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Maintained technical edge through continuous learning during a
              career break. Tried my hands on building simple React Native
              application.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 m-4 p-2  bg-background-secondary"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Adaptable, resilient, and possessing strong time management
              skills.
            </p>
          </div>
          <motion.div
            className="justify-self-center"
            variants={imageChildVariants}
          >
            <img
              className="md:w-70 md:h-70 w-30 h-30 rounded-full"
              src={resilient}
              alt="time management"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 m-4 p-2 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="justify-self-center"
            variants={imageChildVariants}
          >
            <img
              className="md:w-70 md:h-70 w-30 h-30 rounded-full"
              src={techskills}
              alt="code on screen"
            />
          </motion.div>
          <div className="self-center col-span-2">
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Proven technical skills in HTML, CSS, JavaScript, React, NodeJS,
              and RESTful APIs, responsive design, MySQL, MongoDB.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

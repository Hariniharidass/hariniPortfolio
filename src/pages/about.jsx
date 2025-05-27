import { motion } from "motion/react";
import developer from "../../public/images/developer.png";
import workingwoman from "../../public/images/workingwoman.jpg";
import performance from "../../public/images/performance.jpg";
import react from "../../public/images/reacttech.jpg";
import resilient from "../../public/images/resilient.jpg";
import teamwork from "../../public/images/teamwork.jpg";
import techskills from "../../public/images/techskills.jpg";
import continuouslearning from "../../public/images/continuouslearning.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const textChildVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageChildVariants = {
  hidden: { scale: 0, opacity: 0, rotate: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function about() {
  return (
    <div className="flex flex-col justify-center items-center my-20 text-2xl">
      <h1>Get to know me...</h1>
      <div className="grid gap-5">
        <motion.div
          className="grid grid-cols-3 m-4 p-2  bg-gray-300 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            className="self-center col-span-2 w-full "
            variants={textChildVariants}
          >
            <p className="col-span-2 md:my-5 md:text-3xl text-xl text-center">
              I'm a dedicated Frontend Developer resuming my career journey with
              renewed energy and a deep passion for creating exceptional web
              experiences.
            </p>
          </motion.div>
          <motion.div
            className="justify-self-center"
            variants={imageChildVariants}
          >
            <img
              className="md:w-70 md:h-70 w-30 h-30 rounded-full"
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
          viewport={{ once: false, amount: 0.5 }}
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
          <motion.div
            className="self-center col-span-2 "
            variants={textChildVariants}
          >
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Practical experience in developing full-stack web applications.
              Worked at DASC as Frontend developer.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 m-4 p-2  bg-gray-300"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            className="self-center col-span-2"
            variants={textChildVariants}
          >
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Master in Computer Science from Malmö University. Master's thesis
              at Axis Communications focused on web performance optimization.
            </p>
          </motion.div>
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
          viewport={{ once: false, amount: 0.5 }}
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
          <motion.div
            className="self-center col-span-2"
            variants={textChildVariants}
          >
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              IT Frontend Developement Course from Sundsgården Folkhögskola,
              Helsingborg. Actively refining and expanding skills in modern
              frontend technologies like React.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 m-4 p-2  bg-gray-300"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            className="self-center col-span-2"
            variants={textChildVariants}
          >
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Driven to contribute effectively and collaborate within teams.
            </p>
          </motion.div>
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
          viewport={{ once: false, amount: 0.5 }}
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
          <motion.div
            className="self-center col-span-2"
            variants={textChildVariants}
          >
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Maintained technical edge through continuous learning during a
              career break. Tried my hands on building simple React Native
              application.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 m-4 p-2  bg-gray-300"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            className="self-center col-span-2"
            variants={textChildVariants}
          >
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Adaptable, resilient, and possessing strong time management
              skills.
            </p>
          </motion.div>
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
          viewport={{ once: false, amount: 0.5 }}
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
          <motion.div
            className="self-center col-span-2"
            variants={textChildVariants}
          >
            <p className=" md:my-5 md:text-3xl text-base text-center ">
              Proven technical skills in HTML, CSS, JavaScript, NodeJS, and
              RESTful APIs, responsive design.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default about;

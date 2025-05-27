import Button from "../components/CustomButton";
import myImage from "../../public/images/me.jpg";
import { motion } from "motion/react";
function home() {
  return (
    <div className="text-black mt-5 flex flex-col justify-center items-center">
      <motion.img
        initial={{ scale: 1, opacity: 1, rotate: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          rotateY: 360,
          transition: {
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 1,
          },
        }}
        viewport={{ once: false }}
        width="150"
        height="350"
        className=" md:w-65 md:h-80 rounded-full border-2 border-black"
        src={myImage}
        alt="Harini-picture"
      />
      <h5 className="md:my-6 my-3 md:py-3 md:text-3xl text-2xl text-center ">
        I'm <span className="md:text-5xl text-2xl ">Harini Natarajan</span>
      </h5>
      <h5 className=" md:py-4 my-1 md:text-3xl text-lg text-center ">
        Frontend developer based in Lund, Sweden
      </h5>

      <a
        className="md:text-2xl text-lg border-black hover:bg-black hover:text-white rounded-2xl md:w-2/6 md:h-25 w-1/6 h-20"
        href="mailto:hello2harinihari@gmail.com"
      >
        <Button name="Hire me !" />
      </a>
    </div>
  );
}

export default home;

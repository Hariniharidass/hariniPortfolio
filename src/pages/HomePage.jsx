import Button from "../components/CustomButton";
import myImage from "../../public/images/me.jpg";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="text-text-primary bg-background-primary dark:bg-background-primary dark:text-text-primary pt-10 flex flex-col justify-center items-center mt-10 min-h-screen">
      <motion.img
        initial={{ scale: 0.6, opacity: 1 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={150}
        height={150}
        className=" md:w-65 md:h-80 rounded-full"
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
        className="md:text-2xl text-lg border-border hover:bg-accent-primary hover:text-text-secondary rounded-2xl md:w-2/6 md:h-25 w-1/6 h-20 mt-5 cursor-pointer"
        href="mailto:hello2harinihari@gmail.com"
      >
        <Button name="Send an Email !" />
      </a>
    </div>
  );
}

export default Home;

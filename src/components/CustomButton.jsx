import gmail from "../../public/images/gmail.png";
// import "./button.css";
const CustomButton = ({ name }) => {
  return (
    <>
      <div className="btn-container flex flex-col justify-center items-center ">
        <button
          className={`inline-flex border-b-2 justify-around items-center bg-background-primary text-text-primary  hover:text-text-primary hover:font-bold   dark:bg-background-primary dark:text-text-primary   dark:hover:text-accent-primary w-[200px] h-[70px] md:w-[250px] md:h-[100px  p-2  outline-accent-primary dark:hover:outline-accent-primary
          `}
        >
          <span>
            <img
              width="48"
              height="48"
              className="w-10 h-10 md:w-15 md:h-15 z-100"
              src={gmail}
              alt="gmail-image"
            />
          </span>
          <span className="inline-flex flex-row z-100">{name}</span>
        </button>
      </div>
    </>
  );
};

export default CustomButton;

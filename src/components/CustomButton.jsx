import gmail from "../../public/images/gmail.png";
// import "./button.css";
const CustomButton = ({ name }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <button
          className={`inline-flex hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-2 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-accent-secondary before:absolute before:left-0 before:bottom-0 justify-around items-center bg-background-primary text-text-primary  hover:text-text-primary hover:font-medium  w-fit h-10 md:w-fit md:h-20
          `}
        >
          <span>
            <img
              width="48"
              height="48"
              className="w-10 h-10 md:w-15 md:h-15 z-100 mr-4"
              src={gmail}
              alt="gmail-image"
            />
          </span>
          <span className=" flex-row z-100 hidden md:inline ">{name}</span>
        </button>
      </div>
    </>
  );
};

export default CustomButton;

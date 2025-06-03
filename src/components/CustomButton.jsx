import gmail from "../../public/images/gmail.png";
import "./button.css";
const CustomButton = ({ name }) => {
  return (
    <>
      <div className="btn-container flex flex-col justify-center items-center ">
        <button className="btn outline-1 outline-gray-400 w-[200px] h-[70px] md:w-[250px] md:h-[100px">
          <span>
            <img width="48" height="48" className="w-10 h-10 md:w-15 md:h-15" src={gmail} alt="gmail-image" />
          </span>
          <span className="inline-flex flex-row">{name}</span>
        </button>
      </div>
    </>
  );
};

export default CustomButton;

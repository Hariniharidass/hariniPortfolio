import gmail from "../../public/images/gmail.png";
import "./button.css";
const button = ({ name }) => {
  return (
    <>
      <div className="btn-container flex flex-col justify-center items-center">
        <button className="btn">
          <span>
            <img width="48" height="48" src={gmail} alt="gmail-image" />
          </span>
          <span className="inline-flex flex-row">{name}</span>
        </button>
      </div>
    </>
  );
};

export default button;

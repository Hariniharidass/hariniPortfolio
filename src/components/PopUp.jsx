import React, { useState } from "react";

function PopUp({ description, repoLink, video, onClick }) {
  return (
    <div className="z-100 flex-row  mx-3 border-4 border-solid border-black  ">
      <h3 className="my-4 text-center font-bold">Demo</h3>
      <h4 className="my-4 text-center">{description}</h4>
      <p className="my-3 text-center">
        Github Link :
        <span className="font-bold hover:cursor-pointer "> {repoLink}</span>
      </p>
      <div className="flex justify-center w-full">
        <video width="750" height="500" className="md:rounded" controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center my-3 ">
        <button
          type="button"
          onClick={onClick}
          className=" cursor-pointer p-3 hover:border-1 hover:bg-white hover:text-black rounded bg-black text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PopUp;

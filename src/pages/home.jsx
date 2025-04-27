import React from "react";

function home() {
  return (
    <div className="text-black mt-20 flex flex-col justify-center items-center">
      <h3 className="my-6 py- 8 text-2xl text-center ">
        Hi! Welcome to my portfolio webpage!
      </h3>
      <h5 className="my-20 py- 8 text-3xl text-center ">
        I'm <span className="text-5xl">Harini Natarajan</span>
      </h5>
      <h5 className="my-10 py- 8 text-3xl text-center ">
        Frontend developer based in Lund, Sweden
      </h5>
      <button
        type="button"
        className="text-2xl border-2 border-black hover:bg-black hover:text-white rounded-2xl w-1/6 h-15"
      >
        {" "}
        Mail me!
      </button>
    </div>
  );
}

export default home;

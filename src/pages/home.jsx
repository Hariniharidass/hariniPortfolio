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

      <a
        className="text-2xl border-black hover:bg-black hover:text-white rounded-2xl w-1/6 h-15"
        href="mailto:hello2harinihari@gmail.com"
      >
        <button
          className="border-2 border-black hover:bg-black hover:text-white rounded-2xl w-full h-15"
          type="button"
        >
          Mail me!
        </button>
      </a>
    </div>
  );
}

export default home;

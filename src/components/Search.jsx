import React, { useState } from "react";

function Search({ tags }) {
  function searchText() {
    console.log("text");
  }
  function searchTags() {
    console.log("tags");
  }
  return (
    <div className=" flex-row items-center w-1/2  h-auto ">
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Search by Title... "
          className="w-2/3 my-2 text-2xl text-black bg-white border-2 border-r-0  p-3"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={45}
          height={47}
          viewBox="0 0 512 512"
          onClick={searchText()}
          className="cursor-pointer hover:bg-black p-1 bg-white border-2 border-l-0 hover:fill-white"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
      <div className="text-center text-2xl my-10">
        <h2>Search based on tech tags</h2>
      </div>

      <div className="flex w-full justify-evenly my-7 ">
        <button
          type="button"
          onClick={searchTags()}
          className=" cursor-pointer p-3  hover:bg-white hover:text-black rounded bg-black text-white"
        >
          HTML
        </button>
        <button
          type="button"
          onClick={searchTags}
          className=" cursor-pointer p-3  hover:bg-white hover:text-black rounded bg-black text-white"
        >
          CSS
        </button>
        <button
          type="button"
          onClick={searchTags}
          className=" cursor-pointer p-3  hover:bg-white hover:text-black rounded bg-black text-white"
        >
          JAVASCRIPT
        </button>
      </div>
    </div>
  );
}

export default Search;

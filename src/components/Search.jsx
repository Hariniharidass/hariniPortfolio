import React, { useState, useRef } from "react";

function Search({ projects, onSearch }) {
  const searchInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  // Search by Project Name
  const handleSearch = (searchValue) => {
    if (projects && Array.isArray(projects)) {
      const filteredProjects = projects.filter((project) =>
        project.projectName.toLowerCase().includes(searchValue.toLowerCase())
      );
      onSearch(filteredProjects);
    }
  };

  function handleSearchIconClick() {
    if (searchInputRef.current) {
      handleSearch(searchInputRef.current.value);
    }
  }

  // Search based on tags
  const handleTagSearch = (tag) => {
    if (projects && Array.isArray(projects)) {
      const filteredProjects = projects.filter((project) =>
        project.techUsed.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
      );
      onSearch(filteredProjects);
    }
  };

  return (
    <div className=" flex-row items-center w-auto h-auto ">
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Search by Title... "
          className="w-2/3 my-2 text-2xl text-black bg-white border-2 border-r-0  p-3"
          onChange={handleInputChange}
          ref={searchInputRef}
          value={searchTerm}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={45}
          height={47}
          viewBox="0 0 512 512"
          className="cursor-pointer hover:bg-black p-1 bg-white border-2 border-l-0 hover:fill-white"
          onClick={handleSearchIconClick}
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
      <div className="text-center text-2xl my-10">
        <h2>Search based on tech tags</h2>
      </div>

      <div className="grid  grid-cols-2  sm:grid-cols-3 gap-2 md:flex md:items-center w-full md:justify-evenly md:my-7  ">
        <button
          type="button"
          onClick={() => handleTagSearch("all")}
          className=" cursor-pointer p-3  hover:bg-white hover:text-black rounded bg-black text-white"
        >
          Show All
        </button>
        <button
          type="button"
          onClick={() => handleTagSearch("html")}
          className=" cursor-pointer p-3  hover:bg-white hover:text-black rounded bg-black text-white"
        >
          HTML
        </button>
      
        <button
          type="button"
          onClick={() => handleTagSearch("sass")}
          className=" cursor-pointer p-3  hover:bg-white hover:text-black rounded bg-black text-white"
        >
          SASS
        </button>
        <button
          type="button"
          onClick={() => handleTagSearch("tailwind")}
          className=" cursor-pointer p-3  hover:bg-white hover:text-black rounded bg-black text-white"
        >
          Tailwind
        </button>
        <button
          type="button"
          onClick={() => handleTagSearch("javascript")}
          className=" cursor-pointer p-3  hover:bg-white hover:text-black rounded bg-black text-white"
        >
          Javascript
        </button>
        <button
          type="button"
          onClick={() => handleTagSearch("react")}
          className=" cursor-pointer p-3  hover:bg-white hover:text-black rounded bg-black text-white"
        >
          React
        </button>
      </div>
    </div>
  );
}

export default Search;

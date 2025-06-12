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
          placeholder="Search by Project Title... "
          className="w-2/3 my-2 text-2xl placeholder:text-text-secondary text-text-primary bg-background-secondary border-2 p-4"
          onChange={handleInputChange}
          ref={searchInputRef}
          value={searchTerm}
        />
      </div>
      <div className="text-center text-2xl my-10 text-text-primary">
        <h2>Search based on tech tags</h2>
      </div>

      <div className="grid  grid-cols-2  sm:grid-cols-3 gap-2 md:flex md:items-center w-full md:justify-evenly md:my-7  ">
        <button
          type="button"
          onClick={() => handleTagSearch("all")}
          className=" cursor-pointer p-3   hover:bg-accent-secondary  hover:text-background-primary rounded bg-background-primary text-text-primary border-2 border-text-primary"
        >
          Show All
        </button>
        <button
          type="button"
          onClick={() => handleTagSearch("html")}
          className=" cursor-pointer p-3  hover:bg-accent-secondary hover:text-background-primary rounded bg-background-primary text-text-primary border-2 border-text-primary"
        >
          HTML
        </button>

        <button
          type="button"
          onClick={() => handleTagSearch("sass")}
          className=" cursor-pointer p-3  hover:bg-accent-secondary  hover:text-background-primary rounded bg-background-primary text-text-primary border-2 border-text-primary"
        >
          SASS
        </button>
        <button
          type="button"
          onClick={() => handleTagSearch("tailwind")}
          className=" cursor-pointer p-3  hover:bg-accent-secondary  hover:text-background-primary rounded bg-background-primary text-text-primary border-2 border-text-primary"
        >
          Tailwind
        </button>
        <button
          type="button"
          onClick={() => handleTagSearch("javascript")}
          className=" cursor-pointer p-3  hover:bg-accent-secondary hover:text-background-primary rounded bg-background-primary text-text-primary border-2 border-text-primary"
        >
          Javascript
        </button>
        <button
          type="button"
          onClick={() => handleTagSearch("react")}
          className=" cursor-pointer p-3  hover:bg-accent-secondary  hover:text-background-primary rounded bg-background-primary text-text-primary border-2 border-text-primary"
        >
          React
        </button>
      </div>
    </div>
  );
}

export default Search;

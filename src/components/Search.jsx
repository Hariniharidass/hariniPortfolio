import { useState } from "react";

function Search({ projects, onSearch }) {
  const [term, setTerm] = useState("");
  const [tag, setTag] = useState("all");
  const tags = ["all", ...new Set(projects.flatMap((project) => project.techUsed).filter((tech) => tech !== "all"))];
  function filter(nextTerm, nextTag) {
    setTerm(nextTerm);
    setTag(nextTag);
    onSearch(projects.filter((project) => project.projectName.toLowerCase().includes(nextTerm.trim().toLowerCase()) && (nextTag === "all" || project.techUsed.includes(nextTag))));
  }
  return (
    <div className="project-search">
      <label htmlFor="project-search">Search projects</label>
      <input id="project-search" type="search" placeholder="Search by title…" value={term} onChange={(event) => filter(event.target.value, tag)} />
      <div className="filters" role="group" aria-label="Filter by technology">{tags.map((tech) => <button key={tech} aria-pressed={tag === tech} onClick={() => filter(term, tech)}>{tech === "all" ? "All projects" : tech}</button>)}</div>
    </div>
  );
}
export default Search;

function ProjectCard({ projectName, date, category, techUsed = [], description, details = [], repoLink, liveLink }) {
  return (
    <article className="project-card">
      <p className="eyebrow">{date || category || "Frontend project"}</p>
      <h2>{projectName}</h2>
      <p>{description}</p>
      <p className="project-stack">{techUsed.filter((tech) => tech !== "all").join(" · ")}</p>
      {details.length > 0 && <details><summary>Project details</summary><ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul></details>}
      <div className="social-links">
        {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer" aria-label={`${projectName} GitHub repository`}>GitHub ↗</a>}
        {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${projectName} live demo`}>Live demo ↗</a>}
      </div>
    </article>
  );
}
export default ProjectCard;

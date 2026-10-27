const skills = {
  Frontend: "HTML5, CSS3, JavaScript, TypeScript, Svelte, React, React Native, Tailwind CSS, Bootstrap, Sass/Less",
  Backend: "Python, FastAPI, Node.js, Express.js, PHP, REST APIs",
  Databases: "PostgreSQL, SQLite, MySQL, MongoDB",
  "Testing and Code Quality": "pytest, Python unittest, Ruff, Unit Testing, Integration Testing",
  "DevOps and Development Tools": "Docker, Docker Compose, Git, GitHub, GitHub Actions CI/CD, VS Code, Jira",
  "AI-Assisted Development": "GitHub Copilot, OpenAI Codex",
  "Design and Collaboration": "Figma, Responsive Web Design, Agile/Scrum",
};
const experience = [
  { title: "Fullstack Developer Intern", company: "Kravi Analytics", location: "Lund, Sweden", date: "September 2026 – Present",
    description: "Contributing to the development of multiple applications using modern frontend and backend technologies.",
    details: ["Developing frontend and backend functionality using Svelte, TypeScript, Python, and FastAPI.", "Working with PostgreSQL and SQLite databases; using pytest for testing and Ruff for Python code quality.", "Using Docker and Docker Compose in development workflows, and GitHub Actions for CI/CD.", "Using GitHub Copilot and OpenAI Codex to support everyday development tasks."] },
  { title: "Frontend Software Developer Intern", company: "Fyaril AB", location: "Lund, Sweden", date: "August 2025 – December 2025",
    details: ["Developed webhook integrations for real-time e-commerce event capture and automated cart recovery.", "Developed responsive, customer-driven call-to-action (CTA) UI blocks.", "Collaborated with cross-functional teams in an Agile environment to iterate on user feedback."] },
  { title: "Frontend Developer", company: "DASC", location: "Australia (Remote)", date: "March 2018 – December 2018",
    description: "Created and developed web applications for auction services as a remote contributor.",
    details: ["Involved in requirement analysis, designing and coding the application.", "Collaborated with team members across regions.", "Developed applications using Express.js, Node.js, Bootstrap, and MySQL."] },
  { title: "Thesis Student", company: "Axis Communications", location: "Lund, Sweden", date: "March 2017 – June 2017",
    description: "Master’s thesis focused on web performance optimization.",
    details: ["Researched methods to decrease first paint time by loading critical files upfront.", "Used Design Science Research methodology to create a tool for identifying essential CSS."] },
];
const education = [
  ["IT Frontend Development", "Sundsgården Folkhögskola", "January 2025 – June 2025"],
  ["Master of Science in Computer Science", "Malmö University", "August 2016 – June 2017"],
  ["Master's in Computer Science and Engineering", "Anna University", "August 2012 – June 2014"],
  ["Bachelor's in Computer Science and Engineering", "Anna University", "August 2008 – June 2012"],
];

function About() {
  return (
    <div className="page-shell">
      <header className="page-heading">
      <p className="eyebrow">Background & capabilities</p>
      <h1>About me</h1>
      <p className="page-intro">I’m Harini, a Fullstack Software Developer based in Lund, Sweden. My work spans frontend interfaces, backend APIs, and databases. I enjoy collaborating with teams and continuing to learn.</p>
      <p>My background includes frontend development, a master’s thesis on web performance, and continuous learning during a career break, including building a simple React Native application.</p>
      <div className="resume-note"><a className="text-link" href={`${import.meta.env.BASE_URL}CV_Harini_Natarajan.pdf`} download="CV_Harini_Natarajan.pdf">Download CV (PDF) ↗</a></div>
      </header>
      <section className="content-section" aria-labelledby="experience-heading">
        <p className="eyebrow">Career</p><h2 id="experience-heading">Professional experience</h2>
        <div className="timeline">{experience.map((job) => <article className="experience-card" key={job.company}>
          <p className="eyebrow">{job.date}</p><h3>{job.title}</h3><p className="company">{job.company} · {job.location}</p>
          {job.description && <p>{job.description}</p>}
          {job.details && <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
        </article>)}</div>
      </section>
      <section className="content-section" aria-labelledby="skills-heading"><p className="eyebrow">Toolbox</p><h2 id="skills-heading">Technical skills</h2>
        <div className="skills-grid">{Object.entries(skills).map(([category, technologies]) => <article className="skill-card" key={category}><h3>{category}</h3><p>{technologies}</p></article>)}</div>
      </section>
      <section className="content-section" aria-labelledby="education-heading"><p className="eyebrow">Education</p><h2 id="education-heading">Academic background</h2>
        <div className="education-grid">{education.map(([degree, school, date]) => <article className="skill-card" key={degree}><p className="eyebrow">{date}</p><h3>{degree}</h3><p>{school}</p></article>)}</div>
      </section>
    </div>
  );
}
export default About;

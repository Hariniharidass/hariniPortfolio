import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div>
          <p className="eyebrow">Lund, Sweden</p>
          <h1 id="hero-title">Harini<br />Natarajan<span className="accent-dot">.</span></h1>
          <p className="hero-title">Fullstack Software Developer</p>
          <p className="page-intro">Fullstack Software Developer with experience developing web applications using Python, FastAPI, Svelte, TypeScript, and PostgreSQL. My background includes frontend development, backend APIs, automated testing, containerization, and CI/CD workflows.</p>
          <div className="actions">
            <Link className="button button-primary" to="/projects">View Projects ↗</Link>
            <a className="button" href="mailto:hello2harinihari@gmail.com">Contact me</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Hariniharidass" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com/in/harini-natarajan-854b9510a" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <figure className="portrait"><img src={`${import.meta.env.BASE_URL}images/me.png`} alt="Harini Natarajan" width="200" height="200" fetchPriority="high" /></figure>
      </section>
      <section className="home-note" aria-labelledby="current-role">
        <p className="eyebrow">Currently</p>
        <div><h2 id="current-role">Fullstack Developer Intern</h2><p>Kravi Analytics · Lund, Sweden · September 2026 – Present</p></div>
        <Link className="text-link" to="/about">Explore my experience ↗</Link>
      </section>
    </div>
  );
}
export default Home;

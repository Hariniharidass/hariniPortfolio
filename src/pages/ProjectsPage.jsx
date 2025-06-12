import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ProjectCard from "../components/ProjectCard";
import Search from "../components/Search";

function Projects() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#f0f0f0",
        },
      },
      particles: {
        number: {
          value: 50,
        },
        color: {
          value: "#333333",
        },
        fullScreen: {
          enable: false,
        },
        shape: {
          type: "image",
          options: {
            image: [
              {
                src: "/hariniPortfolio/images/html.svg",
                width: 32,
                height: 32,
              },
              {
                src: "/hariniPortfolio/images/css.svg",
                width: 32,
                height: 32,
              },
              {
                src: "/hariniPortfolio/images/js.svg",
                width: 32,
                height: 32,
              },
              {
                src: "/hariniPortfolio/images/tailwind.svg",
                width: 32,
                height: 32,
              },
              {
                src: "/hariniPortfolio/images/node.svg",
                width: 32,
                height: 32,
              },
              {
                src: "/hariniPortfolio/images/sass.svg",
                width: 32,
                height: 32,
              },
              {
                src: "/hariniPortfolio/images/mongodb.svg",
                width: 32,
                height: 32,
              },
              {
                src: "/hariniPortfolio/images/react.svg",
                width: 32,
                height: 32,
              },
              {
                src: "/hariniPortfolio/images/mysql.svg",
                width: 32,
                height: 32,
              },
            ],
          },
        },
        opacity: {
          value: 0.4,
        },
        size: {
          value: 16,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "random",
          random: true,
          straight: false,
          outModes: "bounce",
        },
        collisions: {
          enable: true,
          bounce: {
            horizontal: {
              enable: true,
              factor: 0.1,
            },
            vertical: {
              enable: true,
              factor: 0.5,
            },
          },
          overlap: {
            enable: true,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const initialProjectsArray = [
    {
      projectName: "Cookie Clicker",
      liveLink: "https://hariniharidass.github.io/CookieClicker/",
      repoLink: "https://github.com/Hariniharidass/CookieClicker",
      techUsed: ["all", "TAILWIND", "REACT"],
      description:
        "Cookie Clicker game built with React and Tailwind CSS. It features user authentication (login and registration), profile avatar selection, and background music, all integrated into a classic incremental clicking game experience.",
      details: [
        " Navigation Bar: Provides intuitive navigation and displays user login status, username, and profile picture. It includes a toggle for background music and logout functionality.",
        " User Authentication: Log in and register to save your game progress locally using localStorage.",
        " Profile Avatars: Choose a unique avatar during registration from a selection fetched from the DiceBear API.",
        "  Background Music: Enjoy optional background music during gameplay, with toggle functionality.",
        " Cookie Clicker Gameplay: The core mechanic involves clicking a large cookie to generate more cookies. Spend earned cookies on various upgrades to increase cookie production rate. ",
      ],
    },
    {
      projectName: "Guessing Game",
      liveLink: "https://hariniharidass.github.io/GuessingGame/",
      repoLink: "https://github.com/Hariniharidass/GuessingGame",
      techUsed: ["all", "TAILWIND", "REACT"],
      description:
        " A modern, responsive web application built with React that allows users to predict the nationality associated with a given name by leveraging an external API. ",
      details: [
        "Guess nationality from a last name using the nationalize.io API.",
        "User Authentication with SignUp and SignIn forms ",
        "Credentials stored in localStorage for demo purposes",
        "Navbar adapts, showing login/register for guests and a welcome/logout for logged-in users",
        "Seamless page transitions using React Router DOM ",
        "Dynamic navigation and responsive design",
      ],
    },
    {
      projectName: "Responsive Navigation",
      liveLink: "https://hariniharidass.github.io/Responsive-navigation/",
      repoLink: "https://github.com/Hariniharidass/Responsive-navigation",
      techUsed: ["all", "HTML", "SASS", "JAVASCRIPT"],
      description:
        "A webpage for event organiser with different pages using responsive navigation.",
      details: [
        "Used hamburger menu for navigation in small devices",
        "All links on the page is accessible at all screen sizes",
        "Implemented SASS, semantic HTML",
        "Used normalize.css",
      ],
    },
  ];

  const [filteredProjects, setFilteredProjects] =
    useState(initialProjectsArray);

  //To handle search results and display projects
  const handleSearch = (results) => {
    setFilteredProjects(results);
  };

  return (

      <div className="mt-30 flex justify-center items-center flex-col relative overflow-hidden">
        {init && (
          <Particles
            id="tsparticles"
            options={options}
            className=" absolute inset-0 z-[-1]"
          />
        )}
        <Search projects={initialProjectsArray} onSearch={handleSearch} />

        <div>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.projectName}
              repoLink={project.repoLink}
              liveLink={project.liveLink}
              techUsed={project.techUsed}
              description={project.description}
              details={project.details}
            />
          ))}
        </div>
      </div>
  );
}

export default Projects;

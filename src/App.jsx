import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ProjectCard from "../src/components/projectCard.jsx";
import formImage from "./assets/images/Duck-form.png";
import cssSvgImage from "./assets/images/invitation.png";
import responsiveNavigation from "./assets/images/responsiveNav.png";

function App() {
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
      // Your particles configuration (adjust as desired)
      background: {
        color: {
          value: "#0d47a1", // Your background color
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 5 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          outModes: "bounce",
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="relative overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
      )}
      <div className="relative z-10 p-4 flex flex-col items-center">
        <ProjectCard
          projectName="Forms"
          repoLink="https://github.com/Hariniharidass/Html-forms"
          techUsed={["HTML", "CSS"]}
          details="A simple HTML form with validation and flexbox"
          image={formImage}
          imgAltText="duck-form-image"
        />
        <ProjectCard
          projectName="CSS SVG Animations"
          repoLink="https://github.com/Hariniharidass/SVG-CSS-animation"
          techUsed={["HTML", "CSS"]}
          details=" A birthday invitation card using CSS SVG animations "
          image={cssSvgImage}
          imgAltText="css-svg-invitation"
        />
        <ProjectCard
          projectName="Responsive Navigation"
          repoLink="https://github.com/Hariniharidass/Responsive-navigation"
          techUsed={["HTML", "SASS"]}
          details="A webpage for event organiser with different pages using responsive navigation"
          image={responsiveNavigation}
          imgAltText="responsive-navigation"
        />
      </div>
    </div>
  );
}

export default App;
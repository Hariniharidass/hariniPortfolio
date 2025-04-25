import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
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
      background: {
        color: {
          value: "#0d47a1", //background color
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
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
            Home{" "}
          </Route>
          <Route path="/about" element={<About />}>
            {" "}
            About{" "}
          </Route>
          <Route path="/projects" element={<Projects />}>
            {" "}
            Projects{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

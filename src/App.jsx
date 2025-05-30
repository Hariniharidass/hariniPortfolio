import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/Aprojects.jsx";
import Navbar from "./components/NavigationBar.jsx";

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

  return (
    <div className="relative overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
      )}
      <BrowserRouter basename="/hariniPortfolio/">
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

import { useEffect, useMemo, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";
const ParticlesBackground = memo(() =>  {
  const [init, setInit] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [particlesBackground, setParticlesBackground] = useState("#ffffff");

  useEffect(() => {
    switch (theme) {
      case "dark":
        setParticlesBackground("#000814");
        break;
      case "light":
        setParticlesBackground("#ffffff");
            break;
            default:
                setParticlesBackground("#ffffff");
                break;
    }
  }, [theme]);

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
          value: particlesBackground,
        },
      },
      particles: {
        number: {
          value: 50,
        },
        color: {
            value: theme === "dark" ? "#cccccc" : "#333333",
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
          value: 0.6,
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
    [particlesBackground,theme]
  );

if(init){
  return (

        <Particles
          id="tsparticles"
          options={options}
          className=" absolute inset-0 z-[-1]"
        />
      )}


return null;
});


export default ParticlesBackground;

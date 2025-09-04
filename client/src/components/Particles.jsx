import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "./context/ThemeContext";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  const [theme] = useTheme();

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
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 200, links: { opacity: 0.25 } },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: {
          // 👇 same gradient combo for BOTH light & dark
          value: ["#6366F1", "#A855F7", "#EC4899"], // indigo → purple → pink
        },
        links: {
          color: ["#6366F1", "#A855F7", "#EC4899"],
          distance: 150,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        number: {
          density: { enable: true, area: 800 },
          value: 120,
        },
        opacity: {
          value: 0.7,
          animation: { enable: true, speed: 0.5, minimumValue: 0.3 },
        },
        shape: {
          type: ["circle", "triangle", "star"],
        },
        size: {
          value: { min: 1, max: 3 },
          animation: { enable: true, speed: 2, minimumValue: 0.5 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (!init) return null;

  return (
    <Particles
      id={props.id}
      options={options}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesComponent;

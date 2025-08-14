"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "tsparticles-engine";

export default function Particulas() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container: Container): void => {
    console.log("Particles loaded:", container);
  };

  if (!init) return null;

  return (
    <Particles
      id="star-particles"
      particlesLoaded={particlesLoaded}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 144,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.3 } },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: false },
          move: {
            enable: true,
            speed: 0.6,
            outModes: { default: "out" },
            random: true,
            straight: false,
          },
          number: { value: 120, density: { enable: true, area: 900 } },
          opacity: { value: 0.25 },
          shape: { type: "triangle" },
          size: { value: { min: 3, max: 6 } },
        },
        detectRetina: true,
      }}
    />
  );
}

import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#22d3ee", "#a78bfa", "#f472b6"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.1,
            },
          },
          size: {
            value: 2,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#22d3ee",
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.3,
              },
            },
            push: {
              particles_nb: 3,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;

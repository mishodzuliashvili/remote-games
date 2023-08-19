"use client";
import Playground from "@/components/Playground";
import { useMain } from "./mainContext";
import Game from "@/components/Games/Game";
import JoinPlayground from "@/components/JoinPlayground";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import type { Engine } from "tsparticles-engine";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function Home() {
  const { player, game } = useMain();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const { width, height } = useWindowSize();
  return (
    <main className="">
      <div className="fixed top-0 left-0 bg-gradient-to-tr w-full h-screen -z-10 from-purple-500 to-blue-500"></div>

      <Particles
        className="absolute top-0 left-0 w-full h-full -z-10"
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            image:
              "linear-gradient(218deg, rgba(43,98,236,1) 0%, rgba(166,85,247,1) 100%)",
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
              resize: true,
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
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      {!player && <JoinPlayground />}
      {player && !game && <Playground />}
      {player && game && <Game />}
    </main>
  );
}

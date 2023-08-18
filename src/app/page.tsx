"use client";
import Playground from "@/components/Playground";
import { useMain } from "./mainContext";
import Game from "@/components/Games/Game";
import JoinPlayground from "@/components/JoinPlayground";

export default function Home() {
  const { player, game } = useMain();
  return (
    <main>
      {!player && <JoinPlayground />}
      {player && !game && <Playground />}
      {player && game && <Game />}
    </main>
  );
}

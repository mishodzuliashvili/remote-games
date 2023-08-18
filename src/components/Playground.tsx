"use client";

import { useMain } from "@/app/mainContext";
import GamesMain from "./Games/GamesMain";

const Playground = () => {
  const { player, leavePlayground } = useMain();
  return (
    <div className="p-5 flex flex-col gap-2 items-start">
      <h1 className="text-xl font-medium">Playground</h1>
      <h2>Nickname: {player?.name}</h2>
      <button
        className=" text-black underline font-medium rounded-full"
        onClick={leavePlayground}
      >
        Logout
      </button>
      <p>You can play games remotely here just choose one</p>
      <div>
        <GamesMain />
      </div>
    </div>
  );
};

export default Playground;

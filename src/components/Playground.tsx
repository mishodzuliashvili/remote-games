"use client";

import { useMain } from "@/app/mainContext";
import GamesMain from "./Games/GamesMain";

const Playground = () => {
  const { player, leavePlayground } = useMain();
  return (
    <div className="p-5 flex flex-col gap-2 items-start w-full">
      <h2 className="text-3xl font-bold">Playground</h2>
      <p className="font-medium">Hello, {player?.name}!</p>
      <button
        className=" text-white underline font-medium rounded-full hover:text-gray-200 duration-300"
        onClick={leavePlayground}
      >
        Logout
      </button>
      <GamesMain />

      {/* <h1 className="text-xl font-medium">Playground</h1>
      <h2>Nickname: {player?.name}</h2>
      <button
        className=" text-black underline font-medium rounded-full"
        onClick={leavePlayground}
      >
        Logout
      </button>
      <p>You can play games remotely here just choose one</p> */}
    </div>
  );
};

export default Playground;

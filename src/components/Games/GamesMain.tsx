"use client";

import { useGame } from "@/app/gameContext";
import { useMain } from "@/app/mainContext";
import Image from "next/image";

const GamesMain = () => {
  const { joinGameRoom } = useMain();
  const { gameProfiles } = useGame();
  return (
    <div className="w-full grid grid-cols-1 pt-5 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-3">
      {gameProfiles.map((gameProfile: GameProfile) => (
        <div
          className="border border-gray-200 rounded-md p-3 flex gap-3 flex-col items-start"
          key={gameProfile.gameRoomName}
        >
          <h3 className="font-medium text-xl">{gameProfile.name}</h3>
          <p>{gameProfile.description}</p>
          <Image
            width={300}
            height={300}
            className="w-full max-w-none h-80 object-cover rounded-md"
            src={gameProfile.image}
            alt={gameProfile.name}
          />
          <button
            onClick={() => joinGameRoom(gameProfile.gameRoomName)}
            className="underline"
          >
            Play
          </button>
        </div>
      ))}
    </div>
  );
};

export default GamesMain;

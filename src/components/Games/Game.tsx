"use client";

import { useMain } from "@/app/mainContext";
import { useGame } from "@/app/gameContext";

const Game = () => {
  const { leaveGameRoom } = useMain();
  const {
    gameRoomName,
    players,
    status,
    isGameStarted,
    isGameLoading,
    gameRoomComponent,
    isGameEnded,
    isDraw,
    winnerName,
    isPlayerWinner,
  } = useGame();

  return (
    <div className="p-5 flex flex-col gap-2 items-start w-full">
      <h2 className="text-3xl font-bold">Playground</h2>
      <h3 className="font-medium">GameRoom: {gameRoomName}</h3>
      <p className="font-medium">
        Players: {players.map((player) => player.name).join(", ")}
      </p>
      <button
        className=" text-white underline font-medium rounded-full hover:text-gray-200 duration-300"
        onClick={leaveGameRoom}
      >
        Leave GameRoom
      </button>
      <div>{isGameLoading && "Loading..."}</div>
      <div>{(isGameStarted || isGameEnded) && gameRoomComponent}</div>
      <div>
        {isGameEnded && (
          <div>
            <h1>Game Ended</h1>
            <h3>
              {isDraw && "Draw"}
              {!isDraw && (isPlayerWinner ? "You winner" : "You loser")}
            </h3>
            {winnerName && <h2>Winner is: {winnerName} </h2>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;

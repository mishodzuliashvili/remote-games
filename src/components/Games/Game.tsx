"use client";

import { useMain } from "@/app/mainContext";
import { useGame } from "@/app/gameContext";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

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
  const { width, height } = useWindowSize();

  return (
    <div className="p-5 flex flex-col gap-2 items-start w-full max-w-xl ">
      {isPlayerWinner && (
        <Confetti
          className="fixed top-0 left-0 h-screen w-full"
          recycle={false}
          width={width}
          height={height}
        />
      )}
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
      {(isGameStarted || isGameEnded) && gameRoomComponent}
      <div className="absolute top-0 left-0 w-full pointer-events-none flex items-center justify-center h-screen">
        {isGameEnded && (
          <div className=" rounded-lg p-8 shadow-md bg-gradient-to-tr from-[#b222ff7b] to-blue-500">
            <h1 className="text-4xl font-bold mb-4">Game Ended</h1>
            <h3 className="text-2xl mb-2">
              {isDraw
                ? "It's a Draw"
                : isPlayerWinner
                ? "You're the Winner"
                : "You're the Loser"}
            </h3>
            {winnerName && (
              <h2 className="text-xl font-semibold">Winner: {winnerName}</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;

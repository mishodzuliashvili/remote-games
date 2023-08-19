"use client";

import { useGame } from "@/app/gameContext";
import { useMain } from "@/app/mainContext";

enum Move {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}

const RockPaperScissors = () => {
  const { makeMove, player } = useMain();
  const { gameRoomData, isPlayerMove, isGameEnded } = useGame();

  return (
    <div className="w-full self-stretch flex flex-col gap-3 text-2xl sm:text-4xl">
      <div className="flex gap-3">
        <button
          disabled={!isPlayerMove || isGameEnded}
          className=" border p-5 font-mono rounded-md disabled:bg-[#ffffff32] hover:bg-[#ffffff32] flex items-center justify-center"
          onClick={() => makeMove(Move.Rock)}
        >
          🗿
        </button>
        <button
          disabled={!isPlayerMove || isGameEnded}
          className=" border p-5 font-mono rounded-md disabled:bg-[#ffffff32] hover:bg-[#ffffff32] flex items-center justify-center"
          onClick={() => makeMove(Move.Paper)}
        >
          📄
        </button>
        <button
          disabled={!isPlayerMove || isGameEnded}
          className=" border p-5 font-mono rounded-md disabled:bg-[#ffffff32] hover:bg-[#ffffff32] flex items-center justify-center"
          onClick={() => makeMove(Move.Scissors)}
        >
          ✂️
        </button>
      </div>
    </div>
  );
};

export default RockPaperScissors;

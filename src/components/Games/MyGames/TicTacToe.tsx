"use client";

import { useGame } from "@/app/gameContext";
import { useMain } from "@/app/mainContext";

const TicTacToe = () => {
  const { makeMove } = useMain();
  const { gameRoomData, isPlayerMove, isGameEnded } = useGame();

  const { board } = gameRoomData;
  return (
    <div>
      {board.map((row: any, i: number) => {
        return (
          <div key={i} className="flex">
            {row.map((cell: any, inde: number) => {
              return (
                <button
                  disabled={!isPlayerMove || isGameEnded}
                  className="w-36 mr-3 mb-3 h-36 border p-5 text-4xl font-mono rounded-md disabled:bg-[#ffffff32] hover:bg-[#ffffff32] flex items-center justify-center"
                  key={inde}
                  onClick={() =>
                    makeMove({
                      row: i,
                      col: inde,
                    })
                  }
                >
                  {cell ? cell : " "}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TicTacToe;

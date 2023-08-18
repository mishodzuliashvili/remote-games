"use client";

import { useGame } from "@/app/gameContext";
import { useMain } from "@/app/mainContext";

const TicTacToe = () => {
  const { makeMove } = useMain();
  const { gameRoomData, isPlayerMove } = useGame();

  const { board } = gameRoomData;
  return (
    <div>
      {board.map((row: any, i: number) => {
        return (
          <div key={i} className="flex">
            {row.map((cell: any, inde: number) => {
              return (
                <button
                  disabled={!isPlayerMove}
                  className="w-5 h-5 border p-5 disabled:bg-slate-600 hover:bg-gray-200 flex items-center justify-center"
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

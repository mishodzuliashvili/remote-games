"use client";

import { useGame } from "@/app/gameContext";
import { useMain } from "@/app/mainContext";

const TicTacToe = () => {
  const { makeMove } = useMain();
  const { gameRoomData, isPlayerMove, isGameEnded } = useGame();

  const { board } = gameRoomData;
  return (
    <div className="w-full self-stretch grid grid-rows-[5rem_5rem_5rem] text-2xl sm:text-4xl gap-3 sm:grid-rows-[10rem_10rem_10rem]">
      {board.map((row: any, i: number) => {
        return (
          <div
            key={i}
            className="grid w-full gap-3 grid-cols-[5rem_5rem_5rem] sm:grid-cols-[10rem_10rem_10rem]"
          >
            {row.map((cell: any, inde: number) => {
              return (
                <button
                  disabled={!isPlayerMove || isGameEnded}
                  className=" border p-5 font-mono rounded-md disabled:bg-[#ffffff32] hover:bg-[#ffffff32] flex items-center justify-center"
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

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
    <div>
      <h1>Game: {gameRoomName}</h1>
      <button onClick={leaveGameRoom} className="underline">
        Leave GameRoom
      </button>
      <h2>Players</h2>
      <ul>
        {players.map((player: Player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
      <div>Status: {status}</div>
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

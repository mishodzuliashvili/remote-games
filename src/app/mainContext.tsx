"use client";
import MainError from "@/components/Main/MainError";
import MainLoader from "@/components/Main/MainLoader";
import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";

const MainContext = createContext(
  {} as {
    joinPlayground: (nickname: string) => void;
    leavePlayground: () => void;
    joinGameRoom: (game: string) => void;
    leaveGameRoom: () => void;
    makeMove: (move: any) => void;
    player: Player | null;
    game: Game | null;
    loading: boolean;
    error: Error | null;
  }
);

export function MainProvider({ children }: { children: React.ReactNode }) {
  const [player, setPlayer] = useState<Player | null>(null);
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [socket, setSocket] = useState<any>(null);
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "");
    setSocket(socket);
    socket.on("connect", () => {
      setLoading(false);
    });
    socket.on("error-got", (err: Error) => {
      setError(err);
    });
    // Server emits player to player when he joins/leaves playground or make any other action
    socket.on("player-got", (player: Player) => {
      setPlayer(player);
    });
    // Server emits game to player when he joins/leaves game room or make move or any other action
    socket.on("game-got", (game: Game) => {
      setGame(game);
    });
    // notification from server like if "game started", "game ended", "player left", "player joined" etc.
    // or "move" was incorrect and etc
    socket.on("message-got", (message) => {
      toastMessage(message);
    });
  }, []);

  const toastMessage = (message: ServerMessage) => {
    toast(message.content, {
      type: message.type,
      theme: "colored",
    });
  };

  const joinPlayground = (playerName: string) => {
    socket.emit("join-playground", {
      playerName,
    });
  };

  const leavePlayground = () => {
    socket.emit("leave-playground");
    setPlayer(null);
  };

  const joinGameRoom = (gameRoomName: string) => {
    socket.emit("join-game-room", {
      gameRoomName,
    });
  };

  const leaveGameRoom = () => {
    socket.emit("leave-game-room");
    setGame(null);
  };

  const makeMove = (move: any) => {
    socket.emit("make-move", { move });
  };

  return (
    <MainContext.Provider
      value={{
        joinPlayground,
        leavePlayground,
        joinGameRoom,
        leaveGameRoom,
        makeMove,
        player,
        game,
        loading,
        error,
      }}
    >
      <ToastContainer
        style={{
          color: "black",
          borderRadius: "10px",
        }}
      />
      {error && <MainError error={error} />}
      {!error && loading && <MainLoader />}
      {!error && !loading && children}
    </MainContext.Provider>
  );
}

export function useMain() {
  return useContext(MainContext);
}

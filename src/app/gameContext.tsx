"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useMain } from "./mainContext";
import { GAME_PROFILES } from "@/components/Games/MyGames/games";

const GameContext = createContext(
  {} as {
    gameRoomName: string | undefined;
    players: Player[];
    status: string | undefined;
    gameRoomComponent: React.ReactNode;
    gameProfiles: GameProfile[];
    isGameEnded: boolean;
    gameRoomData: any;
    winnerName: string | undefined;
    isDraw: boolean;
    isPlayerWinner: boolean;
    isPlayerMove: boolean;
    isGameLoading: boolean;
    isGameStarted: boolean;
  }
);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const { game, player } = useMain();

  const gameRoomName = game?.gameRoom.name;
  const players = game?.players || [];
  const status = game?.gameRoom.status;
  const gameProfiles = GAME_PROFILES;
  const gameRoomComponent = GAME_PROFILES.find(
    (gameProfile: GameProfile) =>
      gameProfile.gameRoomName === game?.gameRoom.name
  )?.component;
  const isGameEnded = game?.gameRoom.status === "ended";
  const gameRoomData = game?.gameRoom.data;
  const winnerName = game?.players?.find(
    (player: Player) => player.id === game?.gameRoom.winnerID
  )?.name;
  const isDraw = game?.gameRoom.winnerID === "";
  const isPlayerWinner = game?.gameRoom.winnerID === player?.id;
  const isPlayerMove = player?.id === game?.gameRoom.currentPlayerID;
  const isGameLoading = game?.gameRoom.status === "loading";
  const isGameStarted = game?.gameRoom.status === "started";
  return (
    <GameContext.Provider
      value={{
        gameRoomName,
        players,
        status,
        gameRoomComponent,
        gameProfiles,
        isGameEnded,
        gameRoomData,
        winnerName,
        isDraw,
        isPlayerWinner,
        isPlayerMove,
        isGameLoading,
        isGameStarted,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}

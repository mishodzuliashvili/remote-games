"use client";
import React from "react";
import { MainProvider } from "./mainContext";
import { GameProvider } from "./gameContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      <GameProvider>{children}</GameProvider>
    </MainProvider>
  );
}

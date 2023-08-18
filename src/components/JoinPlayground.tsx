"use client";

import Avatar from "boring-avatars";
import { useMain } from "@/app/mainContext";
import { useLocalStorage } from "@rehooks/local-storage";

const JoinPlayground = () => {
  const [playerName, setPlayerName] = useLocalStorage<string>("playerName", "");
  const { joinPlayground } = useMain();
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          joinPlayground(playerName);
        }}
        className="flex flex-col items-center gap-3"
      >
        <Avatar
          size={200}
          name={playerName}
          variant="beam"
          colors={["#08D9D6", "#252A34", "#FF2E63", "#EAEAEA"]}
        />
        <input
          type="text"
          required
          className="border border-gray-200 rounded-full py-3 px-5 outline-none"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your nickname.."
        />
        <button className="bg-[#252A34] text-white font-medium rounded-full py-3 px-5">
          Join To Playground
        </button>
      </form>
    </div>
  );
};

export default JoinPlayground;

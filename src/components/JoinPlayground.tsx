"use client";

import { useMain } from "@/app/mainContext";
import { useLocalStorage } from "@rehooks/local-storage";

const JoinPlayground = () => {
  const [playerName, setPlayerName] = useLocalStorage<string>("playerName", "");
  const { joinPlayground } = useMain();

  return (
    <div className="flex items-center text-center p-5 flex-col gap-3 justify-center h-screen bg-transparent">
      <h2 className="font-extrabold text-5xl">Have Fun and Play Games</h2>
      <p className="text-xl">
        Join to playground and play games with people around the world
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          joinPlayground(playerName);
        }}
        className="flex items-center gap-3 flex-wrap sm:flex-nowrap justify-center"
      >
        <input
          type="text"
          required
          className="border border-gray-200 rounded-full py-3 px-5 outline-none text-black w-full max-w-sm"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter nickname.."
        />
        <button className="bg-[white] text-black font-medium rounded-full py-3 px-5">
          Join
        </button>
      </form>
    </div>
  );
};

export default JoinPlayground;

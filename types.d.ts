type Player = {
  id: string;
  name: string;
};

type Game = {
  players: Player[];
  gameRoom: GameRoom;
};

type GameRoom = {
  id: string;
  name: string;
  status: "loading" | "started" | "ended";
  winnerID: string;
  playerIDs: string[];
  maxPlayers: number;
  data: any;
  currentPlayerID: string;
};

type GameProfile = {
  name: string;
  gameRoomName: string;
  component: React.ReactNode;
  description: string;
  image: string;
};

type ServerMessage = {
  content: string;
  type: "info" | "success" | "warning" | "error" | "default";
};

import TicTacToe from "./TicTacToe";

export const GAME_PROFILES: GameProfile[] = [
  {
    name: "Tic Tac Toe",
    gameRoomName: "Tic Tac Toe",
    component: <TicTacToe />,
    description:
      "Tic Tac Toe is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
    image:
      "https://img.freepik.com/premium-photo/basketball-balls-tic-tac-toe-game-red-background-3d-rendering_476612-19555.jpg",
  },
  {
    name: "Rock Paper Scissors",
    gameRoomName: "Rock Paper Scissors",
    component: null,
    description:
      'Rock paper scissors is an intransitive hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock", "paper", and "scissors"',
    image:
      "https://c4.wallpaperflare.com/wallpaper/899/325/192/minimalism-rock-paper-scissors-wallpaper-preview.jpg",
  },
];

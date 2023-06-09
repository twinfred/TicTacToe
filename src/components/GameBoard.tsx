import { useGame } from "../hooks/useGame";
import { GameBoardSpace } from "./GameBoardSpace";

export const GameBoard = () => {
  const { spaces, currentPlayer } = useGame();

  console.log("GameBoard re-render", spaces);

  return (
    <div>
      <p className="text-center font-bold mb-2">
        Current Player: {currentPlayer}
      </p>
      <div className="grid grid-cols-3 grid-rows-3 gap-1 max-w-[75%] sm:max-w-[35%] mx-auto bg-slate-600">
        {spaces.map((space, idx) => (
          <GameBoardSpace key={idx} index={idx}>
            {space}
          </GameBoardSpace>
        ))}
      </div>
    </div>
  );
};

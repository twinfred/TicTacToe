import { useGame } from "../hooks/useGame";
import { GameBoardSpace } from "./GameBoardSpace";

export const GameBoard = () => {
  const { spaces } = useGame();

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-1 sm: max-w-[40%] md:max-w-[35%] mx-auto">
      {spaces.map((space, idx) => (
        <GameBoardSpace key={idx} index={idx}>
          {space}
        </GameBoardSpace>
      ))}
    </div>
  );
};

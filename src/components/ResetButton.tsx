import { SpacesActionType } from "../context/GameContext";
import { useGame } from "../hooks/useGame";

export const ResetButton = () => {
  const { spacesDispatch, setWinner } = useGame();

  const handleClick = () => {
    spacesDispatch?.({
      type: SpacesActionType.RESET_GAME,
    });

    setWinner?.(undefined);
  };

  return (
    <div className="text-center">
      <button
        onClick={handleClick}
        className="text-slate-600 bg-white font-bold p-2"
      >
        ResetGame
      </button>
    </div>
  );
};

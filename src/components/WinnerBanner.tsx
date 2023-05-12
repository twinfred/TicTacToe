import { useGame } from "../hooks/useGame";
import { ResetButton } from "./ResetButton";

export const WinnerBanner = () => {
  const { winner } = useGame();

  return winner ? (
    <div
      className="w-full bg-lime-900 text-white font-bold text-l text-center absolute top-1/2 p-4"
      role="alert"
      aria-live="polite"
    >
      <p>The winner is Player {winner}!</p>
      <p className="mb-4">
        Reset the game to play again. The winning player starts the next game.
      </p>
      <ResetButton />
    </div>
  ) : null;
};

import { useGame } from "../hooks/useGame";

export const WinnerBanner = () => {
  const { winner } = useGame();

  return winner ? (
    <div className="w-full bg-lime-700 text-white font-bold text-l text-center absolute top-0">
      <p>The winner is Player {winner}</p>
    </div>
  ) : null;
};

import { PropsWithChildren } from "react";
import { useGame } from "../hooks/useGame";
import { Player, SpacesActionType } from "../context/GameContext";
import { getWinnerIndexes } from "../utils/winnerUtils";

interface GameBoardSpaceProps {
  index: number;
}

export const GameBoardSpace = ({
  children,
  index,
}: PropsWithChildren<GameBoardSpaceProps>) => {
  const {
    spaces,
    spacesDispatch,
    currentPlayer,
    setCurrentPlayer,
    winner,
    setWinner,
  } = useGame();

  const handleClick = () => {
    if (winner) return;

    if (!spaces[index]) {
      spacesDispatch?.({
        type: SpacesActionType.SELECT_SPACE,
        spaceIndex: index,
        player: currentPlayer,
      });

      getWinnerIndexes(currentPlayer, index, spaces)
        ? setWinner?.(currentPlayer)
        : setCurrentPlayer?.(currentPlayer === Player.X ? Player.O : Player.X);
    }
  };

  return (
    <button
      className="aspect-square bg-slate-200 text-5xl bold"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

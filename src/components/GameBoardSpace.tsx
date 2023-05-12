import { PropsWithChildren } from "react";
import { useGame } from "../hooks/useGame";
import { Player, SpacesActionType } from "../context/GameContext";

interface GameBoardSpaceProps {
  index: number;
}

export const GameBoardSpace = ({
  children,
  index,
}: PropsWithChildren<GameBoardSpaceProps>) => {
  const { spaces, spacesDispatch, currentPlayer, setCurrentPlayer } = useGame();

  const handleClick = () => {
    console.log({ index, spacesDispatch });
    if (!spaces[index]) {
      spacesDispatch?.({
        type: SpacesActionType.SELECT_SPACE,
        spaceIndex: index,
        player: currentPlayer,
      });
      setCurrentPlayer?.(currentPlayer === Player.X ? Player.O : Player.X);
    }
  };

  return (
    <button
      className="aspect-square bg-slate-200 text-xl bold"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

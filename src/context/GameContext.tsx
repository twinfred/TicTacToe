import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useReducer,
  useState,
} from "react";

export enum Player {
  X = "X",
  O = "O",
}

export interface GameContextType {
  currentPlayer: Player;
  setCurrentPlayer?: Dispatch<SetStateAction<Player>>;
  spaces: (Player | null)[];
  spacesDispatch?: Dispatch<SpacesAction>;
  winner?: Player;
  setWinner?: Dispatch<SetStateAction<Player | undefined>>;
}

const gameContextDefaultValues: GameContextType = {
  currentPlayer: Player.X,
  spaces: new Array(9).fill(null),
};

export const GameContext = createContext<GameContextType>(
  gameContextDefaultValues
);

interface SpacesState {
  spaces: (Player | null)[];
}

export enum SpacesActionType {
  SELECT_SPACE,
  RESET_GAME,
}

interface SpacesAction {
  player?: Player;
  spaceIndex?: number;
  type?: SpacesActionType;
}

const spacesReducer = (state: SpacesState, action: SpacesAction) => {
  const { type, player, spaceIndex } = action;
  console.log({ state, action });
  switch (type) {
    case SpacesActionType.SELECT_SPACE:
      if (!spaceIndex || !player) return state;

      if (!state.spaces[spaceIndex] && spaceIndex < 9) {
        const newSpaces = [...state.spaces];
        newSpaces[spaceIndex] = player;
        return { spaces: newSpaces };
      }
      return state;
    case SpacesActionType.RESET_GAME:
      return { spaces: new Array(9).fill(null) };
    default:
      return state;
  }
};

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [currentPlayer, setCurrentPlayer] = useState(
    gameContextDefaultValues.currentPlayer
  );
  const [{ spaces }, spacesDispatch] = useReducer(spacesReducer, {
    spaces: gameContextDefaultValues.spaces,
  });
  console.log("Context", { spaces });
  const [winner, setWinner] = useState<Player | undefined>();

  const value = {
    currentPlayer,
    setCurrentPlayer,
    spaces,
    spacesDispatch,
    winner,
    setWinner,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

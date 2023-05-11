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

interface GameContextType {
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

export enum SpaceActionType {
  FILL_SPACE,
  RESET,
}

interface SpacesAction {
  player: Player;
  spaceIndex: number;
  type: SpaceActionType;
}

const spacesReducer = (state: SpacesState, action: SpacesAction) => {
  const { type, player, spaceIndex } = action;
  console.log({ state, action });
  switch (type) {
    case SpaceActionType.FILL_SPACE:
      if (!state.spaces[spaceIndex] && spaceIndex < 9) {
        const newSpaces = [...state.spaces];
        newSpaces[spaceIndex] = player;
        return { spaces: newSpaces };
      }
      return state;
    case SpaceActionType.RESET:
      return { spaces: gameContextDefaultValues.spaces };
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
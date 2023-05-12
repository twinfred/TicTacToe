import { Player } from "../context/GameContext";

const winningIndexes = [
  [0, 1, 2], // (top row)
  [3, 4, 5], // (middle row)
  [6, 7, 8], // (bottom row)
  // Columns:
  [0, 3, 6], // (left column)
  [1, 4, 7], // (middle column)
  [2, 5, 8], // (right column)
  // Diagonals:
  [0, 4, 8], // (top-left to bottom-right diagonal)
  [2, 4, 6], // (top-right to bottom-left diagonal)
];

export const getWinnerIndexes = (
  currentPlayer: Player,
  selectedSpace: number,
  spaces: (Player | null)[]
): number[] | null => {
  spaces[selectedSpace] = currentPlayer;

  for (const indexes of winningIndexes) {
    const [a, b, c] = indexes;
    const valueA = spaces[a];
    const valueB = spaces[b];
    const valueC = spaces[c];

    if (valueA && valueA === valueB && valueB === valueC) {
      return indexes; // Found a winning combination
    }
  }

  return null; // No winner
};

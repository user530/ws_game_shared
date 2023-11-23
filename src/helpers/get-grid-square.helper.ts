import { GameFieldSquare, GameTableCol, GameTableRow } from '../enums';

export const getGridSquare = (row: GameTableRow, col: GameTableCol): GameFieldSquare => `${row}, ${col}` as GameFieldSquare;
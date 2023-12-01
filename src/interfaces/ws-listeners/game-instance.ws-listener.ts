import { GameEventGameDraw, GameEventGameWon, GameEventNewTurn } from '../ws-events';
import { ErrorMessage } from '../ws-messages';

interface GameInstanceListeners {
    wsErrorListener(errMessage: ErrorMessage): void;
    wsGameWonListener(gameWonMessage: GameEventGameWon): void;
    wsGameDrawListener(gameDrawMessage: GameEventGameDraw): void;
    wsGameNewTurnListener(newTurnMessage: GameEventNewTurn): void;
}
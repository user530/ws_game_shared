import { GameEventGameDraw, GameEventGameWon, GameEventNewTurn, ErrorEvent } from '../ws-events';
import { GameCommandMakeTurn, GameCommandForfeit } from '../ws-messages/game-instance.ws-message';

export interface GameInstanceEventsHandler {
    wsErrorListener(errEvent: ErrorEvent): void;
    wsGameWonListener(gameWonEvent: GameEventGameWon): void;
    wsGameDrawListener(gameDrawEvent: GameEventGameDraw): void;
    wsGameNewTurnListener(newTurnEvent: GameEventNewTurn): void;
}

export interface GameInstanceMessagesHandler {
    wsGameMakeTurnListener(newTurnMessage: GameCommandMakeTurn): void;
    wsGameForfeitListener(gameForfeitMessage: GameCommandForfeit): void;
}
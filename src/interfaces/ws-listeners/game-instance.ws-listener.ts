import { GameEventGameDraw, GameEventGameWon, GameEventNewTurn, ErrorEvent } from '../ws-events';
import { GameCommandMakeTurn, GameCommandForfeit } from '../ws-messages/game-instance.ws-message';

export interface GameInstanceEventsHandler {
    wsErrorListener(socket: unknown, errEvent: ErrorEvent): Promise<void>;
    wsGameWonListener(socket: unknown, gameWonEvent: GameEventGameWon): Promise<void>;
    wsGameDrawListener(socket: unknown, gameDrawEvent: GameEventGameDraw): Promise<void>;
    wsGameNewTurnListener(socket: unknown, newTurnEvent: GameEventNewTurn): Promise<void>;
}

export interface GameInstanceMessagesHandler {
    wsGameMakeTurnListener(socket: unknown, newTurnMessage: GameCommandMakeTurn): Promise<void>;
    wsGameForfeitListener(socket: unknown, gameForfeitMessage: GameCommandForfeit): Promise<void>;
}
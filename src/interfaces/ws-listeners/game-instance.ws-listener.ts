import { GameEventGameDraw, GameEventGameWon, GameEventNewTurn } from '../ws-events';
import { GameCommandMakeTurn, GameCommandForfeit } from '../ws-messages/game-instance.ws-message';

export interface GameInstanceEventsHandler {
    wsGameWonListener(gameWonEvent: GameEventGameWon): Promise<void>;
    wsGameDrawListener(gameDrawEvent: GameEventGameDraw): Promise<void>;
    wsGameNewTurnListener(newTurnEvent: GameEventNewTurn): Promise<void>;
};

export interface GameInstanceMessagesHandler {
    wsGameMakeTurnListener(socket: unknown, newTurnMessage: GameCommandMakeTurn): Promise<void>;
    wsGameForfeitListener(socket: unknown, gameForfeitMessage: GameCommandForfeit): Promise<void>;
};
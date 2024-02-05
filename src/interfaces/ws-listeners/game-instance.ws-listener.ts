import { GameEventGameDraw, GameEventGameWon, GameEventNewTurn, ErrorEvent, ChatEvent } from '../ws-events';
import { ChatMessage } from '../ws-messages';
import { GameCommandMakeTurn, GameCommandForfeit } from '../ws-messages/game-instance.ws-message';

export interface GameInstanceEventsHandler {
    wsErrorListener(errEvent: ErrorEvent): Promise<void>;
    wsChatEventListener(chatEvent: ChatEvent): Promise<void>;
    wsGameWonListener(gameWonEvent: GameEventGameWon): Promise<void>;
    wsGameDrawListener(gameDrawEvent: GameEventGameDraw): Promise<void>;
    wsGameNewTurnListener(newTurnEvent: GameEventNewTurn): Promise<void>;
};

export interface GameInstanceMessagesHandler {
    wsChatMessageListener(socket: unknown, chatMessage: ChatMessage): Promise<void>;
    wsGameMakeTurnListener(socket: unknown, newTurnMessage: GameCommandMakeTurn): Promise<void>;
    wsGameForfeitListener(socket: unknown, gameForfeitMessage: GameCommandForfeit): Promise<void>;
};
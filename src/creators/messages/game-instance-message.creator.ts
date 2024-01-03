import { GameCommandMakeTurn, GameCommandForfeit, GameCommandTurnData, GameCommandForfeitData } from '../../interfaces/ws-messages';
import { GameCommand, MessageType } from '../../types';

export const createGameMakeTurnMessage = (turnData: GameCommandTurnData): GameCommandMakeTurn => {
    return { version: 1, type: MessageType.GameCommand, command: GameCommand.MakeTurn, data: turnData };
};

export const createGameForfeitMessage = (forfeitData: GameCommandForfeitData): GameCommandForfeit => {
    return { version: 1, type: MessageType.GameCommand, command: GameCommand.ForfeitMatch, data: forfeitData };
};
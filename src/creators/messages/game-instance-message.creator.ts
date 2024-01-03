import { GameCommandMakeTurn, GameCommandForfeit, GameCommandTurnData, GameCommandForfeitData } from '../../interfaces/ws-messages';
import { GameCommand, MessageType } from '../../types';

export const createInstanceMakeTurnMessage = (turnData: GameCommandTurnData): GameCommandMakeTurn => {
    return { version: 1, type: MessageType.GameCommand, command: GameCommand.MakeTurn, data: turnData };
};

export const createInstanceForfeitMessage = (forfeitData: GameCommandForfeitData): GameCommandForfeit => {
    return { version: 1, type: MessageType.GameCommand, command: GameCommand.ForfeitMatch, data: forfeitData };
};
import { GameCommandMakeTurn, GameCommandDataType, GameCommandForfeit } from '../../interfaces/ws-messages';
import { GameCommand, MessageType } from '../../types';

export const createGameMakeTurnMessage = (turnData: GameCommandDataType): GameCommandMakeTurn => {
    return { version: 1, type: MessageType.GameCommand, command: GameCommand.MakeTurn, data: turnData };
};

export const createGameForfeitMessage = (gameData: Pick<GameCommandDataType, 'game_id' | 'player_id'>): GameCommandForfeit => {
    return { version: 1, type: MessageType.GameCommand, command: GameCommand.ForfeitMatch, data: gameData };
};
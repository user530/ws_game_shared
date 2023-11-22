import { GameCommandMakeTurn, GameCommandDataType, GameCommandForfeit } from '../interfaces';

export const createGameMakeTurnMessage = (turnData: GameCommandDataType): GameCommandMakeTurn => {
    return { version: 1, type: 'game_command', command: 'make_turn', data: turnData };
};

export const createGameForfeitMessage = (gameData: Pick<GameCommandDataType, 'game_id' | 'player_id'>): GameCommandForfeit => {
    return { version: 1, type: 'game_command', command: 'forfeit_match', data: gameData };
};
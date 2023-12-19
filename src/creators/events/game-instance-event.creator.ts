import { GameEventNewTurn, GameEventGameWon, GameEventGameDraw, GameTurnDataType } from '../../interfaces/ws-events';

export const createGameWonEvent = (winnerData: GameEventGameWon['data']): GameEventGameWon => {
    return { version: 1, type: 'game_event', command: 'game_won', data: winnerData };
};

export const createGameDrawEvent = (): GameEventGameDraw => {
    return { version: 1, type: 'game_event', command: 'game_draw' };
};

export const createNewTurnEvent = (newTurnData: GameTurnDataType): GameEventNewTurn => {
    return { version: 1, type: 'game_event', command: 'new_turn', data: newTurnData };
};
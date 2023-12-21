import { GameEventNewTurn, GameEventGameWon, GameEventGameDraw, GameTurnDataType } from '../../interfaces/ws-events';
import { GameEvent, MessageType } from '../../types';

export const createGameWonEvent = (winnerData: GameEventGameWon['data']): GameEventGameWon => {
    return { version: 1, type: MessageType.GameEvent, command: GameEvent.GameWon, data: winnerData };
};

export const createGameDrawEvent = (): GameEventGameDraw => {
    return { version: 1, type: MessageType.GameEvent, command: GameEvent.GameDraw };
};

export const createNewTurnEvent = (newTurnData: GameTurnDataType): GameEventNewTurn => {
    return { version: 1, type: MessageType.GameEvent, command: GameEvent.NewTurn, data: newTurnData };
};
import { GameEventNewTurn, GameEventGameWon, GameEventGameDraw, GameEventTurnData, GameEventWinnerData } from '../../interfaces/ws-events';
import { GameEvent, MessageType } from '../../types';

export const createInstanceGameWonEvent = (winnerData: GameEventWinnerData): GameEventGameWon => {
    return { version: 1, type: MessageType.GameEvent, command: GameEvent.GameWon, data: winnerData };
};

export const createInstanceGameDrawEvent = (): GameEventGameDraw => {
    return { version: 1, type: MessageType.GameEvent, command: GameEvent.GameDraw };
};

export const createInstanceNewTurnEvent = (newTurnData: GameEventTurnData): GameEventNewTurn => {
    return { version: 1, type: MessageType.GameEvent, command: GameEvent.NewTurn, data: newTurnData };
};
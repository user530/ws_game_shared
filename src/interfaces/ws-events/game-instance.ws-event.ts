import { BaseWSMessageType, MessageType, GameEvent } from '../../types';
import { GameTableCol, GameTableRow } from '../../enums';

interface BaseGameEventMessage extends BaseWSMessageType {
    type: MessageType.GameEvent,
    command: GameEvent,
}

export interface GameEventTurnData {
    row: GameTableRow,
    column: GameTableCol,
    mark: 'X' | 'O',
}

export interface GameEventWinnerData {
    playerName: string,
}

export interface GameEventGameWon extends BaseGameEventMessage {
    command: GameEvent.GameWon,
    data: GameEventWinnerData,
}

export interface GameEventGameDraw extends BaseGameEventMessage {
    command: GameEvent.GameDraw,
}

export interface GameEventNewTurn extends BaseGameEventMessage {
    command: GameEvent.NewTurn,
    data: GameEventTurnData,
}
import { BaseWSMessageType, MessageType, GameEvent } from '../../types';
import { GameTableCol, GameTableRow } from '../../enums';

interface BaseGameEventMessage extends BaseWSMessageType {
    type: MessageType.GameEvent,
    command: GameEvent,
}

export interface GameTurnDataType {
    row: GameTableRow,
    column: GameTableCol,
    mark: 'X' | 'O',
}

export interface GameEventGameWon extends BaseGameEventMessage {
    command: GameEvent.GameWon,
    data: { player_id: string },
}

export interface GameEventGameDraw extends BaseGameEventMessage {
    command: GameEvent.GameDraw,
}

export interface GameEventNewTurn extends BaseGameEventMessage {
    command: GameEvent.NewTurn,
    data: GameTurnDataType,
}

export interface GameEventYourTurn extends BaseGameEventMessage {
    command: GameEvent.YourTurn,
    data: { turnTimeout: Date },
}

export interface GameEventMovedToLobby extends BaseGameEventMessage {
    command: GameEvent.MovedToLobby,
    data: { lobbyId: string },
}

export interface GameEventMovedToHub extends BaseGameEventMessage {
    command: GameEvent.MovedToHub,
}
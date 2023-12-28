import { BaseWSMessageType, GameCommand, MessageType } from '../../types';
import { GameTableCol, GameTableRow } from '../../enums';

interface BaseGameCommandMessage extends BaseWSMessageType {
    type: MessageType.GameCommand,
    command: GameCommand,
}

export interface GameCommandDataType {
    gameId: string,
    playerId: string,
    row: GameTableRow,
    column: GameTableCol,
}

export interface GameCommandMakeTurn extends BaseGameCommandMessage {
    command: GameCommand.MakeTurn,
    data: GameCommandDataType,
}

export interface GameCommandForfeit extends BaseGameCommandMessage {
    command: GameCommand.ForfeitMatch,
    data: Pick<GameCommandDataType, 'gameId' | 'playerId'>,
}

export interface GameCommandLeaveToLobby extends BaseGameCommandMessage {
    command: GameCommand.LeaveToLobby,
    data: Pick<GameCommandDataType, 'playerId'>
}

export interface GameCommandLeaveToHub extends BaseGameCommandMessage {
    command: GameCommand.LeaveToHub,
    data: Pick<GameCommandDataType, 'playerId'>
}
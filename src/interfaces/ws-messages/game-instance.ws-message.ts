import { BaseWSMessageType, GameCommand, MessageType } from '../../types';
import { GameTableCol, GameTableRow } from '../../enums';

interface BaseGameCommandMessage extends BaseWSMessageType {
    type: MessageType.GameCommand,
    command: GameCommand,
}

export interface GameCommandTurnData {
    gameId: string,
    playerId: string,
    row: GameTableRow,
    column: GameTableCol,
}

export interface GameCommandForfeitData {
    gameId: string,
    playerId: string,
}

export interface GameCommandMakeTurn extends BaseGameCommandMessage {
    command: GameCommand.MakeTurn,
    data: GameCommandTurnData,
}

export interface GameCommandForfeit extends BaseGameCommandMessage {
    command: GameCommand.ForfeitMatch,
    data: GameCommandForfeitData,
}
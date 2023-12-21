import { BaseWSMessageType, GameCommand, MessageType } from '../../types';
import { GameTableCol, GameTableRow } from '../../enums';

interface BaseGameCommandMessage extends BaseWSMessageType {
    type: MessageType.GameCommand,
    command: GameCommand,
}

export interface GameCommandDataType {
    game_id: string,
    player_id: string,
    row: GameTableRow,
    column: GameTableCol,
}

export interface GameCommandMakeTurn extends BaseGameCommandMessage {
    command: GameCommand.MakeTurn,
    data: GameCommandDataType,
}

export interface GameCommandForfeit extends BaseGameCommandMessage {
    command: GameCommand.ForfeitMatch,
    data: Pick<GameCommandDataType, 'game_id' | 'player_id'>,
}
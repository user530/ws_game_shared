import { BaseWSMessageType, MessageType } from '../../types';
import { GameTableCol, GameTableRow } from '../../enums';
import { GameEventType } from '../../types/game-instance.type';

interface BaseGameEventMessage extends BaseWSMessageType {
    type: Extract<MessageType, 'game_event'>,
    command: GameEventType,
}

export interface GameTurnDataType {
    row: GameTableRow,
    column: GameTableCol,
    mark: 'X' | 'O',
}

export interface GameEventGameWon extends BaseGameEventMessage {
    command: Extract<GameEventType, 'game_won'>,
    data: { player_id: string },
}

export interface GameEventGameDraw extends BaseGameEventMessage {
    command: Extract<GameEventType, 'game_draw'>,
}

export interface GameEventNewTurn extends BaseGameEventMessage {
    command: Extract<GameEventType, 'new_turn'>,
    data: GameTurnDataType,
}
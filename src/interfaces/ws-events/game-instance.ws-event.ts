import { BaseWSMessageType, MessageType, GameEvent } from '../../types';
import { TurnData, StorePlayerData } from '../general';

interface BaseGameEventMessage extends BaseWSMessageType {
    type: MessageType.GameEvent,
    command: GameEvent,
};

export interface GameEventTurnData extends TurnData { };
export interface GameEventWinnerData extends StorePlayerData { };

export interface GameEventGameWon extends BaseGameEventMessage {
    command: GameEvent.GameWon,
    data: GameEventWinnerData,
};

export interface GameEventGameDraw extends BaseGameEventMessage {
    command: GameEvent.GameDraw,
};

export interface GameEventNewTurn extends BaseGameEventMessage {
    command: GameEvent.NewTurn,
    data: GameEventTurnData,
};
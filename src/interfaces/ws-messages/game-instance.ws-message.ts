import { BaseWSMessageType, GameCommand, MessageType } from '../../types';
import { GamePlayerIdPair, RowColumnPair } from '../general';

interface BaseGameCommandMessage extends BaseWSMessageType {
    type: MessageType.GameCommand,
    command: GameCommand,
};

export interface GameCommandTurnData extends GamePlayerIdPair, RowColumnPair { };
export interface GameCommandForfeitData extends GamePlayerIdPair { };

export interface GameCommandMakeTurn extends BaseGameCommandMessage {
    command: GameCommand.MakeTurn,
    data: GameCommandTurnData,
};

export interface GameCommandForfeit extends BaseGameCommandMessage {
    command: GameCommand.ForfeitMatch,
    data: GameCommandForfeitData,
};
import { BaseWSMessageType, LobbyCommand, MessageType } from '../../types';
import { GamePlayerIdPair } from '../general';

interface BaseLobbyCommandMessage extends BaseWSMessageType {
    type: MessageType.LobbyCommand,
    command: LobbyCommand,
};

export interface LobbyCommandStartData extends GamePlayerIdPair { };
export interface LobbyCommandLeaveData extends GamePlayerIdPair { };
export interface LobbyCommandKickData extends GamePlayerIdPair { };

export interface LobbyCommandStartGame extends BaseLobbyCommandMessage {
    command: LobbyCommand.StartGame,
    data: LobbyCommandStartData,
};

export interface LobbyCommandLeaveLobby extends BaseLobbyCommandMessage {
    command: LobbyCommand.LeaveLobby,
    data: LobbyCommandLeaveData,
};

export interface LobbyCommandKickGuest extends BaseLobbyCommandMessage {
    command: LobbyCommand.KickGuest,
    data: LobbyCommandKickData,
};
import { BaseWSMessageType, LobbyCommand, MessageType } from '../../types';

interface BaseLobbyCommandMessage extends BaseWSMessageType {
    type: MessageType.LobbyCommand,
    command: LobbyCommand,
}

export interface LobbyCommandDataType {
    game_id: string,
}

export interface LobbyCommandStartGame extends BaseLobbyCommandMessage {
    command: LobbyCommand.StartGame,
    data: LobbyCommandDataType,
}

export interface LobbyCommandAbortGame extends BaseLobbyCommandMessage {
    command: LobbyCommand.AbortGame,
    data: LobbyCommandDataType,
}

export interface LobbyCommandKickGuest extends BaseLobbyCommandMessage {
    command: LobbyCommand.KickGuest,
    data: LobbyCommandDataType,
}
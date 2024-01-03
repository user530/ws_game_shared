import { BaseWSMessageType, LobbyCommand, MessageType } from '../../types';

interface BaseLobbyCommandMessage extends BaseWSMessageType {
    type: MessageType.LobbyCommand,
    command: LobbyCommand,
}

export interface LobbyCommandStartData {
    gameId: string,
    playerId: string,
}

export interface LobbyCommandLeaveData {
    gameId: string,
    playerId: string,
}

export interface LobbyCommandKickData {
    gameId: string,
    playerId: string,
}

export interface LobbyCommandStartGame extends BaseLobbyCommandMessage {
    command: LobbyCommand.StartGame,
    data: LobbyCommandStartData,
}

export interface LobbyCommandLeaveLobby extends BaseLobbyCommandMessage {
    command: LobbyCommand.LeaveLobby,
    data: LobbyCommandLeaveData,
}

export interface LobbyCommandKickGuest extends BaseLobbyCommandMessage {
    command: LobbyCommand.KickGuest,
    data: LobbyCommandKickData,
}
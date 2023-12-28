import { BaseWSMessageType, LobbyCommand, MessageType } from '../../types';

interface BaseLobbyCommandMessage extends BaseWSMessageType {
    type: MessageType.LobbyCommand,
    command: LobbyCommand,
}

export interface LobbyCommandDataType {
    lobbyId: string,
    gameId: string,
    playerId: string,
}

export interface LobbyCommandStartGame extends BaseLobbyCommandMessage {
    command: LobbyCommand.StartGame,
    data: Pick<LobbyCommandDataType, 'lobbyId' | 'gameId'>,
}

export interface LobbyCommandCloseLobby extends BaseLobbyCommandMessage {
    command: LobbyCommand.CloseLobby,
    data: Pick<LobbyCommandDataType, 'lobbyId'>,
}

export interface LobbyCommandLeaveLobby extends BaseLobbyCommandMessage {
    command: LobbyCommand.LeaveLobby,
    data: Pick<LobbyCommandDataType, 'lobbyId'>,
}

export interface LobbyCommandKickGuest extends BaseLobbyCommandMessage {
    command: LobbyCommand.KickGuest,
    data: Pick<LobbyCommandDataType, 'lobbyId'>,
}

export interface LobbyCommandPlayerReady extends BaseLobbyCommandMessage {
    command: LobbyCommand.KickGuest,
    data: Pick<LobbyCommandDataType, 'lobbyId' | 'playerId'>,
}
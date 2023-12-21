import { LobbyCommandStartGame, LobbyCommandAbortGame, LobbyCommandKickGuest, LobbyCommandDataType } from '../../interfaces/ws-messages';
import { LobbyCommand, MessageType } from '../../types';

export const createLobbyStartMessage = (lobbyData: LobbyCommandDataType): LobbyCommandStartGame => {
    return { version: 1, type: MessageType.LobbyCommand, command: LobbyCommand.StartGame, data: lobbyData };
};

export const createLobbyAbortMessage = (lobbyData: LobbyCommandDataType): LobbyCommandAbortGame => {
    return { version: 1, type: MessageType.LobbyCommand, command: LobbyCommand.AbortGame, data: lobbyData };
};

export const createLobbyKickMessage = (lobbyData: LobbyCommandDataType): LobbyCommandKickGuest => {
    return { version: 1, type: MessageType.LobbyCommand, command: LobbyCommand.KickGuest, data: lobbyData };
};
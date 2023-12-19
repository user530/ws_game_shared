import { LobbyCommandStartGame, LobbyCommandAbortGame, LobbyCommandKickGuest, LobbyCommandDataType } from '../../interfaces/ws-messages';

export const createLobbyStartMessage = (lobbyData: LobbyCommandDataType): LobbyCommandStartGame => {
    return { version: 1, type: 'lobby_command', command: 'start_game', data: lobbyData };
};

export const createLobbyAbortMessage = (lobbyData: LobbyCommandDataType): LobbyCommandAbortGame => {
    return { version: 1, type: 'lobby_command', command: 'abort_game', data: lobbyData };
};

export const createLobbyKickMessage = (lobbyData: LobbyCommandDataType): LobbyCommandKickGuest => {
    return { version: 1, type: 'lobby_command', command: 'kick_guest', data: lobbyData };
};
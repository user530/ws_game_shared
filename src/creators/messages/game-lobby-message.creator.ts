import { LobbyCommandStartGame, LobbyCommandKickGuest, LobbyCommandLeaveLobby, LobbyCommandStartData, LobbyCommandKickData, LobbyCommandLeaveData } from '../../interfaces/ws-messages';
import { LobbyCommand, MessageType } from '../../types';

export const createLobbyStartMessage = (startData: LobbyCommandStartData): LobbyCommandStartGame => {
    return { version: 1, type: MessageType.LobbyCommand, command: LobbyCommand.StartGame, data: startData };
};

export const createLobbyLeaveMessage = (leaveData: LobbyCommandLeaveData): LobbyCommandLeaveLobby => {
    return { version: 1, type: MessageType.LobbyCommand, command: LobbyCommand.LeaveLobby, data: leaveData };
};

export const createLobbyKickMessage = (kickData: LobbyCommandKickData): LobbyCommandKickGuest => {
    return { version: 1, type: MessageType.LobbyCommand, command: LobbyCommand.KickGuest, data: kickData };
};
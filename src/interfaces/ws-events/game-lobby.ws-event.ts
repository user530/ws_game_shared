import { BaseWSMessageType, LobbyEvent, MessageType } from '../../types';

interface BaseLobbyEventMessage extends BaseWSMessageType {
    type: MessageType.LobbyEvent,
    command: LobbyEvent,
}

export interface LobbyEventJoinedData {
    guestId: string,
    guestName: string,
}

export interface LobbyEventGameData {
    gameId: string,
}

export interface LobbyEventGuestJoined extends BaseLobbyEventMessage {
    command: LobbyEvent.GuestJoined,
    data: LobbyEventJoinedData,
}

export interface LobbyEventGuestLeft extends BaseLobbyEventMessage {
    command: LobbyEvent.GuestLeft,
}

export interface LobbyEventMovedToGame extends BaseLobbyEventMessage {
    command: LobbyEvent.MovedToGame,
    data: LobbyEventGameData,
}

export interface LobbyEventMovedToHub extends BaseLobbyEventMessage {
    command: LobbyEvent.MovedToHub,
}
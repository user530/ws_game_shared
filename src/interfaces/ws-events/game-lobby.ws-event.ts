import { BaseWSMessageType, LobbyEvent, MessageType } from '../../types';

interface BaseLobbyEventMessage extends BaseWSMessageType {
    type: MessageType.LobbyEvent,
    command: LobbyEvent,
}

export interface LobbyGuestDataType {
    guestId: string,
    guestName: string,
}

export interface LobbyEventGuestJoined extends BaseLobbyEventMessage {
    command: LobbyEvent.GuestJoined,
    data: LobbyGuestDataType,
}

export interface LobbyEventGuestLeft extends BaseLobbyEventMessage {
    command: LobbyEvent.GuestLeft,
    data: { guestId: string },
}

export interface LobbyEventMoveToGame extends BaseLobbyEventMessage {
    command: LobbyEvent.MovedToGame,
    data: { gameId: string }
}

export interface LobbyEventMoveToHub extends BaseLobbyEventMessage {
    command: LobbyEvent.MovedToHub,
}

export interface LobbyEventLobbyClosed extends BaseLobbyEventMessage {
    command: LobbyEvent.LobbyClosed,
    data: { lobbyId: string },
}

export interface LobbyEventReadinessChanged extends BaseLobbyEventMessage {
    command: LobbyEvent.ReadinessChanged,
    data: { playerId: string },
}
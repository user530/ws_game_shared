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
}
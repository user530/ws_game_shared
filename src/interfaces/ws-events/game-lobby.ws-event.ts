import { BaseWSMessageType, LobbyEvent, MessageType } from '../../types';
import { GameInstanceStateData, GuestData } from '../general';

interface BaseLobbyEventMessage extends BaseWSMessageType {
    type: MessageType.LobbyEvent,
    command: LobbyEvent,
};

export interface LobbyEventJoinedData extends GuestData { };
export interface LobbyEventToGameData extends GameInstanceStateData { };

export interface LobbyEventGuestJoined extends BaseLobbyEventMessage {
    command: LobbyEvent.GuestJoined,
    data: LobbyEventJoinedData,
};

export interface LobbyEventGuestLeft extends BaseLobbyEventMessage {
    command: LobbyEvent.GuestLeft,
};

export interface LobbyEventMovedToGame extends BaseLobbyEventMessage {
    command: LobbyEvent.MovedToGame,
    data: LobbyEventToGameData,
};

export interface LobbyEventMovedToHub extends BaseLobbyEventMessage {
    command: LobbyEvent.MovedToHub,
};
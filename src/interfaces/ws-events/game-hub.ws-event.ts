import { BaseWSMessageType, HubEvent, MessageType } from '../../types';

interface BaseHubEventMessage extends BaseWSMessageType {
    type: MessageType.HubEvent,
    command: HubEvent,
}

export interface HubEventGameData {
    gameId: string;
    hostName: string;
}

export interface HubEventLobbyData {
    gameId: string;
    hostName: string;
}

export interface HubEventGamesUpdated extends BaseHubEventMessage {
    command: HubEvent.GamesUpdated,
    data: HubEventGameData[],
}

export interface HubEventQuitHub extends BaseHubEventMessage {
    command: HubEvent.QuitHub,
}

export interface HubEventMovedToLobby extends BaseHubEventMessage {
    command: HubEvent.MovedToLobby,
    data: HubEventLobbyData,
}
import { BaseWSMessageType, HubEvent, MessageType } from '../../types';
import { OpenLobbyStateData, LobbyStateData, GameInstanceStateData } from '../general';

interface BaseHubEventMessage extends BaseWSMessageType {
    type: MessageType.HubEvent,
    command: HubEvent,
};

export interface HubEventLobbyData extends OpenLobbyStateData { };
export interface HubEventToLobbyData extends LobbyStateData { };
export interface HubEventToGameData extends GameInstanceStateData { };

export interface HubEventGamesUpdated extends BaseHubEventMessage {
    command: HubEvent.GamesUpdated,
    data: HubEventLobbyData[],
};

export interface HubEventQuitHub extends BaseHubEventMessage {
    command: HubEvent.QuitHub,
};

export interface HubEventMovedToLobby extends BaseHubEventMessage {
    command: HubEvent.MovedToLobby,
    data: HubEventToLobbyData,
};

export interface HubEventMovedToGame extends BaseHubEventMessage {
    command: HubEvent.MovedToGame,
    data: HubEventToGameData,
};
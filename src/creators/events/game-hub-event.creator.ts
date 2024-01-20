import { HubEventGamesUpdated, HubEventMovedToLobby, HubEventMovedToGame, HubEventQuitHub, HubEventLobbyData, HubEventToLobbyData, HubEventToGameData } from '../../interfaces/ws-events';
import { HubEvent, MessageType } from '../../types';

export const createHubGamesUpdatedEvent = (lobbyList: HubEventLobbyData[]): HubEventGamesUpdated => {
    return { version: 1, type: MessageType.HubEvent, command: HubEvent.GamesUpdated, data: lobbyList };
};

export const createHubToLobbyEvent = (lobbyData: HubEventToLobbyData): HubEventMovedToLobby => {
    return { version: 1, type: MessageType.HubEvent, command: HubEvent.MovedToLobby, data: lobbyData };
};

export const createHubToGameEvent = (gameData: HubEventToGameData): HubEventMovedToGame => {
    return { version: 1, type: MessageType.HubEvent, command: HubEvent.MovedToGame, data: gameData };
};

export const createHubQuitEvent = (): HubEventQuitHub => {
    return { version: 1, type: MessageType.HubEvent, command: HubEvent.QuitHub };
};
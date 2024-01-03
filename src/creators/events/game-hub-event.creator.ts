import { HubEventGamesUpdated, HubEventMovedToLobby, HubEventQuitHub, HubEventGameData, HubEventLobbyData } from '../../interfaces/ws-events';
import { HubEvent, MessageType } from '../../types';

export const createHubGamesUpdatedEvent = (hubGames: HubEventGameData[]): HubEventGamesUpdated => {
    return { version: 1, type: MessageType.HubEvent, command: HubEvent.GamesUpdated, data: hubGames };
};

export const createHubToLobbyEvent = (lobbyData: HubEventLobbyData): HubEventMovedToLobby => {
    return { version: 1, type: MessageType.HubEvent, command: HubEvent.MovedToLobby, data: lobbyData };
};

export const createHubQuitEvent = (): HubEventQuitHub => {
    return { version: 1, type: MessageType.HubEvent, command: HubEvent.QuitHub };
}
import { HubEventGamesUpdated, HubEventMovedToLobby, HubEventMovedToGame, HubEventQuitHub } from '../ws-events';
import { HubCommandHostGame, HubCommandJoinGame, HubCommandLeaveHub } from '../ws-messages';

export interface GameHubEventsHandler {
    wsHubGamesUpdatedListener(gamesUpdatedEvent: HubEventGamesUpdated): Promise<void>;
    wsHubMovedToLobbyListener(movedToLobbyEvent: HubEventMovedToLobby): Promise<void>;
    wsHubMovedToGameListener(movedToGameEvent: HubEventMovedToGame): Promise<void>;
    wsHubQuitHubListener(quitHubEvent: HubEventQuitHub): Promise<void>;
};

export interface GameHubMessagesHandler {
    wsHubHostGameListener(socket: unknown, hostGameMessage: HubCommandHostGame): Promise<void>;
    wsHubJoinGameListener(socket: unknown, joinGameMessage: HubCommandJoinGame): Promise<void>;
    wsHubLeaveHubListener(socket: unknown, leaveHubMessage: HubCommandLeaveHub): Promise<void>;
};
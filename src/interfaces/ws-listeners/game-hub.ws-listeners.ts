import { HubEventGamesUpdated, HubEventMovedToLobby, HubEventMovedToGame, HubEventQuitHub, ErrorEvent, ChatEvent } from '../ws-events';
import { HubCommandHostGame, HubCommandJoinGame, HubCommandLeaveHub, ChatMessage } from '../ws-messages';

export interface GameHubEventsHandler {
    wsErrorListener(errEvent: ErrorEvent): Promise<void>;
    wsChatEventListener(chatEvent: ChatEvent): Promise<void>;
    wsHubGamesUpdatedListener(gamesUpdatedEvent: HubEventGamesUpdated): Promise<void>;
    wsHubMovedToLobbyListener(movedToLobbyEvent: HubEventMovedToLobby): Promise<void>;
    wsHubMovedToGameListener(movedToGameEvent: HubEventMovedToGame): Promise<void>;
    wsHubQuitHubListener(quitHubEvent: HubEventQuitHub): Promise<void>;
};

export interface GameHubMessagesHandler {
    wsChatMessageListener(socket: unknown, chatMessage: ChatMessage): Promise<void>;
    wsHubHostGameListener(socket: unknown, hostGameMessage: HubCommandHostGame): Promise<void>;
    wsHubJoinGameListener(socket: unknown, joinGameMessage: HubCommandJoinGame): Promise<void>;
    wsHubLeaveHubListener(socket: unknown, leaveHubMessage: HubCommandLeaveHub): Promise<void>;
};
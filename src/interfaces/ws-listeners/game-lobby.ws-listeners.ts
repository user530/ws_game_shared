import { LobbyEventGuestJoined, LobbyEventGuestLeft, LobbyEventMovedToGame, LobbyEventMovedToHub, ErrorEvent, ChatEvent } from '../ws-events';
import { LobbyCommandStartGame, LobbyCommandLeaveLobby, LobbyCommandKickGuest, ChatMessage } from '../ws-messages';

export interface GameLobbyEventsHandler {
    wsErrorListener(errEvent: ErrorEvent): Promise<void>;
    wsChatEventListener(chatEvent: ChatEvent): Promise<void>;
    wsLobbyGuestJoinedListener(guestJoinedEvent: LobbyEventGuestJoined): Promise<void>;
    wsLobbyGuestLeftListener(guestLeftEvent: LobbyEventGuestLeft): Promise<void>;
    wsLobbyToGameListener(movedToGameEvent: LobbyEventMovedToGame): Promise<void>;
    wsLobbyToHubListener(movedToHubEvent: LobbyEventMovedToHub): Promise<void>;
};

export interface GameLobbyMessagesHandler {
    wsChatMessageListener(socket: unknown, chatMessage: ChatMessage): Promise<void>;
    wsLobbyStartGameListener(socket: unknown, startGameMessage: LobbyCommandStartGame): Promise<void>;
    wsLobbyLeaveLobbyListener(socket: unknown, leaveLobbyMessage: LobbyCommandLeaveLobby): Promise<void>;
    wsLobbyKickGuestListener(socket: unknown, kickGuestMessage: LobbyCommandKickGuest): Promise<void>;
};

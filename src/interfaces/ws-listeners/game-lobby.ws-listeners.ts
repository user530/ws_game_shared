import { LobbyEventGuestJoined, LobbyEventGuestLeft, LobbyEventMovedToGame, LobbyEventMovedToHub } from '../ws-events';
import { LobbyCommandStartGame, LobbyCommandLeaveLobby, LobbyCommandKickGuest } from '../ws-messages';

export interface GameLobbyEventsHandler {
    wsLobbyGuestJoinedListener(guestJoinedEvent: LobbyEventGuestJoined): Promise<void>;
    wsLobbyGuestLeftListener(guestLeftEvent: LobbyEventGuestLeft): Promise<void>;
    wsLobbyToGameListener(movedToGameEvent: LobbyEventMovedToGame): Promise<void>;
    wsLobbyToHubListener(movedToHubEvent: LobbyEventMovedToHub): Promise<void>;
};

export interface GameLobbyMessagesHandler {
    wsLobbyStartGameListener(socket: unknown, startGameMessage: LobbyCommandStartGame): Promise<void>;
    wsLobbyLeaveLobbyListener(socket: unknown, leaveLobbyMessage: LobbyCommandLeaveLobby): Promise<void>;
    wsLobbyKickGuestListener(socket: unknown, kickGuestMessage: LobbyCommandKickGuest): Promise<void>;
};
import { LobbyEventGuestJoined, LobbyEventGuestLeft, LobbyEventMovedToGame, LobbyEventMovedToHub, LobbyEventToGameData, LobbyEventJoinedData } from '../../interfaces/ws-events';
import { LobbyEvent, MessageType } from '../../types';

export const createLobbyGuestJoinedEvent = (guestData: LobbyEventJoinedData): LobbyEventGuestJoined => {
    return { version: 1, type: MessageType.LobbyEvent, command: LobbyEvent.GuestJoined, data: guestData };
};

export const createLobbyGuestLeftEvent = (): LobbyEventGuestLeft => {
    return { version: 1, type: MessageType.LobbyEvent, command: LobbyEvent.GuestLeft };
};

export const createLobbyToGameEvent = (gameData: LobbyEventToGameData): LobbyEventMovedToGame => {
    return { version: 1, type: MessageType.LobbyEvent, command: LobbyEvent.MovedToGame, data: gameData };
};

export const createLobbyToHubEvent = (): LobbyEventMovedToHub => {
    return { version: 1, type: MessageType.LobbyEvent, command: LobbyEvent.MovedToHub };
};

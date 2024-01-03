import { LobbyEventGuestJoined, LobbyEventGuestLeft, LobbyEventMovedToGame, LobbyEventMovedToHub, LobbyEventGameData, LobbyEventJoinedData } from '../../interfaces/ws-events';
import { LobbyEvent, MessageType } from '../../types';

export const createLobbyGuestJoinedEvent = (joinedData: LobbyEventJoinedData): LobbyEventGuestJoined => {
    return { version: 1, type: MessageType.LobbyEvent, command: LobbyEvent.GuestJoined, data: joinedData };
};

export const createLobbyGuestLeftEvent = (): LobbyEventGuestLeft => {
    return { version: 1, type: MessageType.LobbyEvent, command: LobbyEvent.GuestLeft };
};

export const createLobbyToGameEvent = (toGame: LobbyEventGameData): LobbyEventMovedToGame => {
    return { version: 1, type: MessageType.LobbyEvent, command: LobbyEvent.MovedToGame, data: toGame };
};

export const createLobbyToHubEvent = (): LobbyEventMovedToHub => {
    return { version: 1, type: MessageType.LobbyEvent, command: LobbyEvent.MovedToHub };
};

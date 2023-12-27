import { LobbyEventGuestJoined, LobbyEventGuestLeft, LobbyGuestDataType } from '../../interfaces/ws-events';
import { LobbyEvent, MessageType } from '../../types';

export const createLobbyGuestJoinedEvent = (guestData: LobbyGuestDataType): LobbyEventGuestJoined => {
    return { version: 1, type: MessageType.LobbyEvent, command: LobbyEvent.GuestJoined, data: guestData };
};

export const createLobbyGuestLeftEvent = (): LobbyEventGuestLeft => {
    return { version: 1, type: MessageType.LobbyEvent, command: LobbyEvent.GuestLeft };
};

import { HubCommandHostGame, HubCommandJoinGame, HubCommandDataType } from '../../interfaces/ws-messages';
import { HubCommand, MessageType } from '../../types';

export const createHubHostMessage = (playerData: Pick<HubCommandDataType, 'player_id'>): HubCommandHostGame => {
    return { version: 1, type: MessageType.HubCommand, command: HubCommand.HostGame, data: playerData };
};

export const createHubJoinMessage = (gameData: HubCommandDataType): HubCommandJoinGame => {
    return { version: 1, type: MessageType.HubCommand, command: HubCommand.JoinGame, data: gameData };
};
import { HubCommandHostGame, HubCommandJoinGame, HubCommandLeaveHub, HubCommandHostData, HubCommandJoinData } from '../../interfaces/ws-messages';
import { HubCommand, MessageType } from '../../types';

export const createHubHostMessage = (hostData: HubCommandHostData): HubCommandHostGame => {
    return { version: 1, type: MessageType.HubCommand, command: HubCommand.HostGame, data: hostData };
};

export const createHubJoinMessage = (joinData: HubCommandJoinData): HubCommandJoinGame => {
    return { version: 1, type: MessageType.HubCommand, command: HubCommand.JoinGame, data: joinData };
};

export const createHubLeaveMessage = (): HubCommandLeaveHub => {
    return { version: 1, type: MessageType.HubCommand, command: HubCommand.LeaveHub };
}
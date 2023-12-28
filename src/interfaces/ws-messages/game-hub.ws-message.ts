import { BaseWSMessageType, HubCommand, MessageType } from '../../types';

interface BaseHubCommandMessage extends BaseWSMessageType {
    type: MessageType.HubCommand,
    command: HubCommand,
}

export interface HubCommandDataType {
    playerId: string,
    lobbyId: string,
}

export interface HubCommandHostGame extends BaseHubCommandMessage {
    command: HubCommand.HostGame,
    data: Pick<HubCommandDataType, 'playerId'>,
}

export interface HubCommandJoinGame extends BaseHubCommandMessage {
    command: HubCommand.JoinGame,
    data: HubCommandDataType,
}

export interface HubCommandLeaveHub extends BaseHubCommandMessage {
    command: HubCommand.LeaveHub,
    data: Pick<HubCommandDataType, 'playerId'>,
}
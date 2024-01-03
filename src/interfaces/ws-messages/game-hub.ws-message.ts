import { BaseWSMessageType, HubCommand, MessageType } from '../../types';

interface BaseHubCommandMessage extends BaseWSMessageType {
    type: MessageType.HubCommand,
    command: HubCommand,
}

export interface HubCommandHostData {
    playerId: string,
}

export interface HubCommandJoinData {
    playerId: string,
    lobbyId: string,
}

export interface HubCommandHostGame extends BaseHubCommandMessage {
    command: HubCommand.HostGame,
    data: HubCommandHostData,
}

export interface HubCommandJoinGame extends BaseHubCommandMessage {
    command: HubCommand.JoinGame,
    data: HubCommandJoinData,
}

export interface HubCommandLeaveHub extends BaseHubCommandMessage {
    command: HubCommand.LeaveHub,
}
import { BaseWSMessageType, HubCommand, MessageType } from '../../types';
import { GamePlayerIdPair, PlayerId } from '../general';

interface BaseHubCommandMessage extends BaseWSMessageType {
    type: MessageType.HubCommand,
    command: HubCommand,
};

export interface HubCommandHostData extends PlayerId { };
export interface HubCommandJoinData extends GamePlayerIdPair { };

export interface HubCommandHostGame extends BaseHubCommandMessage {
    command: HubCommand.HostGame,
    data: HubCommandHostData,
};

export interface HubCommandJoinGame extends BaseHubCommandMessage {
    command: HubCommand.JoinGame,
    data: HubCommandJoinData,
};

export interface HubCommandLeaveHub extends BaseHubCommandMessage {
    command: HubCommand.LeaveHub,
};
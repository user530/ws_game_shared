import { BaseWSMessageType, HubCommand, MessageType } from '../../types';

interface BaseHubCommandMessage extends BaseWSMessageType {
    type: MessageType.HubCommand,
    command: HubCommand,
}

export interface HubCommandDataType {
    player_id: string,
    game_id: string,
}

export interface HubCommandHostGame extends BaseHubCommandMessage {
    command: HubCommand.HostGame,
    data: Pick<HubCommandDataType, 'player_id'>,
}

export interface HubCommandJoinGame extends BaseHubCommandMessage {
    command: HubCommand.JoinGame,
    data: HubCommandDataType,
}
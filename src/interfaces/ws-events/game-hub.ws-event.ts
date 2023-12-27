import { BaseWSMessageType, HubEvent, MessageType } from '../../types';

interface BaseHubEventMessage extends BaseWSMessageType {
    type: MessageType.HubEvent,
    command: HubEvent,
}

export interface HubGameDataType {
    gameId: string;
    hostId: string;
    hostName: string;
}

export interface HubEventUpdateGames extends BaseHubEventMessage {
    command: HubEvent.UpdateGames,
    data: HubGameDataType[],
}
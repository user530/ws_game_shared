import { HubEventUpdateGames, HubGameDataType } from '../../interfaces/ws-events';
import { HubEvent, MessageType } from '../../types';

export const createHubUpdateGamesEvent = (hubGames: HubGameDataType[]): HubEventUpdateGames => {
    return { version: 1, type: MessageType.HubEvent, command: HubEvent.UpdateGames, data: hubGames };
};

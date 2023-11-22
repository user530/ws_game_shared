import { HubCommandHostGame, HubCommandJoinGame, HubCommandDataType } from '../interfaces';

export const createHubHostMessage = (playerData: Pick<HubCommandDataType, 'player_id'>): HubCommandHostGame => {
    return { version: 1, type: 'gamehub_command', command: 'host_game', data: playerData };
};

export const createHubJoinMessage = (gameData: HubCommandDataType): HubCommandJoinGame => {
    return { version: 1, type: 'gamehub_command', command: 'join_game', data: gameData };
};
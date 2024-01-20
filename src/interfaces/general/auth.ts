export interface HubCredentials {
    userId: string,
};

export interface LobbyCredentials extends HubCredentials {
    gameId: string,
};
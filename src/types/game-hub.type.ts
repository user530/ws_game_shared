export enum HubCommand {
    HostGame = 'host_game',
    JoinGame = 'join_game',
    LeaveHub = 'leave_hub',
}

export enum HubEvent {
    GamesUpdated = 'update_game_list',
    MovedToLobby = 'moved_to_lobby',
    MovedToGame = 'moved_to_game',
    QuitHub = 'quit_hub',
}
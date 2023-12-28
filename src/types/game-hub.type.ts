export enum HubCommand {
    HostGame = 'host_game',
    JoinGame = 'join_game',
    LeaveHub = 'leave_hub',
}

export enum HubEvent {
    UpdateGames = 'update_game_list',
    MovedToLobby = 'moved_to_lobby',
    QuitHub = 'quit_hub',
}
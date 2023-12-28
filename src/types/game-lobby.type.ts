export enum LobbyCommand {
    StartGame = 'start_game',
    CloseLobby = 'close_lobby',
    LeaveLobby = 'leave_lobby',
    KickGuest = 'kick_guest',
    PlayerReady = 'player_ready',
}

export enum LobbyEvent {
    MovedToGame = 'moved_to_game',
    MovedToHub = 'moved_to_hub',
    GuestJoined = 'guest_joined',
    GuestLeft = 'guest_left',
    LobbyClosed = 'lobby_closed',
    ReadinessChanged = 'readiness_changed',
}
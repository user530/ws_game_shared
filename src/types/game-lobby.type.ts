export enum LobbyCommand {
    StartGame = 'start_game',
    LeaveLobby = 'leave_lobby',
    KickGuest = 'kick_guest',
}

export enum LobbyEvent {
    GuestJoined = 'guest_joined',
    GuestLeft = 'guest_left',
    MovedToGame = 'moved_to_game',
    MovedToHub = 'moved_to_hub',
}
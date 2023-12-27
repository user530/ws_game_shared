export enum LobbyCommand {
    StartGame = 'start_game',
    AbortGame = 'abort_game',
    KickGuest = 'kick_guest',
}

export enum LobbyEvent {
    GuestJoined = 'guest_joined',
    GuestLeft = 'guest_left',
}
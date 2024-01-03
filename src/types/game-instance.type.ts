export enum GameCommand {
    MakeTurn = 'make_turn',
    ForfeitMatch = 'forfeit_match',
    LeaveToLobby = 'leave_to_lobby',
    LeaveToHub = 'leave_to_hub',
}

export enum GameEvent {
    GameWon = 'game_won',
    GameDraw = 'game_draw',
    NewTurn = 'new_turn',
    YourTurn = 'your_turn',
    MovedToLobby = 'moved_to_lobby',
    MovedToHub = 'moved_to_hub'
}
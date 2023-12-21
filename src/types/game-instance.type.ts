export enum GameCommand {
    MakeTurn = 'make_turn',
    ForfeitMatch = 'forfeit_match',
}

export enum GameEvent {
    GameWon = 'game_won',
    GameDraw = 'game_draw',
    NewTurn = 'new_turn',
}
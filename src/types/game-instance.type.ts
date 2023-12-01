export type GameCommandType =
    | 'make_turn'
    | 'forfeit_match'

export type GameEventType =
    | 'game_won'
    | 'game_draw'
    | 'new_turn'
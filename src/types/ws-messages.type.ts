export type MessageType =
    | 'gamehub_command'
    | 'gamehub_event'
    | 'lobby_command'
    | 'lobby_event'
    | 'game_command'
    | 'game_event'
    | 'chat_message'
    | 'error'

export type BaseWSMessageType = {
    version: 1,
    type: MessageType,
}

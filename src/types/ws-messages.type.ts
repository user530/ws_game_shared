export enum MessageType {
    HubCommand = 'gamehub_command',
    HubEvent = 'gamehub_event',
    LobbyCommand = 'lobby_command',
    LobbyEvent = 'lobby_event',
    GameCommand = 'game_command',
    GameEvent = 'game_event',
    ChatMessage = 'chat_message',
    ErrorMessage = 'error',
}

export type BaseWSMessageType = {
    version: 1,
    type: MessageType,
}

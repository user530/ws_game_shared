export declare type MessageType = 'gamehub_command' | 'lobby_command' | 'game_command' | 'chat_message' | 'error';
export declare type BaseWSMessageType = {
    version: 1;
    type: MessageType;
};

import { BaseWSMessageType, MessageType } from '../../types';

export interface ChatMessage extends BaseWSMessageType {
    type: MessageType.ChatMessage,
    user: string,
    channel: string,
    message: string,
}
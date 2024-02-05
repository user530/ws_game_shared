import { BaseWSMessageType, MessageType } from '../../types';
import { MessageData } from '../general';

export interface ChatMessage extends BaseWSMessageType {
    type: MessageType.ChatMessage,
    messageData: MessageData,
};
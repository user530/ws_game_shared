import { BaseWSMessageType, MessageType } from '../../types';
import { MessageData } from '../general';

export interface ChatEvent extends BaseWSMessageType {
    type: MessageType.ChatMessage,
    eventData: MessageData,
};
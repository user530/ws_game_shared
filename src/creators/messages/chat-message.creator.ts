import { ChatMessage } from '../../interfaces/ws-messages';
import { MessageType } from '../../types';
import { MessageData } from '../../interfaces/general';

export const createChatMessage = (messageData: MessageData): ChatMessage => {
    return { version: 1, type: MessageType.ChatMessage, messageData };
};
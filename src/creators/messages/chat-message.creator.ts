import { ChatMessage } from '../../interfaces/ws-messages';
import { MessageType } from '../../types';

export const createChatMessage = (messageData: Pick<ChatMessage, 'user' | 'channel' | 'message'>): ChatMessage => {
    return { version: 1, type: MessageType.ChatMessage, ...messageData };
};
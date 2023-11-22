import { ChatMessage } from '../interfaces';

export const createChatMessage = (messageData: Pick<ChatMessage, 'user' | 'channel' | 'message'>): ChatMessage => {
    return { version: 1, type: 'chat_message', ...messageData };
};
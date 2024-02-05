import { ChatEvent } from '../../interfaces/ws-events';
import { MessageType } from '../../types';
import { MessageData } from '../../interfaces/general';

export const createChatEvent = (eventData: MessageData): ChatEvent => {
    return { version: 1, type: MessageType.ChatMessage, eventData };
};
import { ChatEventNewMessage, ChatEventNewMsgData } from '../../interfaces/ws-events';
import { ChatEvent, MessageType } from '../../types';

export const createChatNewMsgEvent = (newMsgData: ChatEventNewMsgData): ChatEventNewMessage => {
    return { version: 1, type: MessageType.ChatEvent, command: ChatEvent.NewMessage, data: newMsgData };
};
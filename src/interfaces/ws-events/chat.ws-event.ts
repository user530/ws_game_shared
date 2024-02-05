import { BaseWSMessageType, MessageType, ChatEvent } from '../../types';
import { MessageData } from '../general';

interface BaseChatEventMessage extends BaseWSMessageType {
    type: MessageType.ChatEvent,
    command: ChatEvent,
};

export interface ChatEventNewMsgData extends MessageData {
    timestamp: [number, number],
    isWhisper: boolean,
};

export interface ChatEventNewMessage extends BaseChatEventMessage {
    command: ChatEvent.NewMessage,
    data: ChatEventNewMsgData,
};
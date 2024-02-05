import { ChatEventNewMessage } from '../ws-events';
import { ChatCommandSendMessage } from '../ws-messages';

export interface ChatEventsHandler {
    wsChatNewMsgListener(newMsgEvent: ChatEventNewMessage): Promise<void>;
};

export interface ChatMessagesHandler {
    wsChatSendMsgListener(socket: unknown, sendMsgMessage: ChatCommandSendMessage): Promise<void>;
};
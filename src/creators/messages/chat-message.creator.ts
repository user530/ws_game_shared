import { ChatCommandSendMessage, ChatCommandSendMsgData } from '../../interfaces/ws-messages';
import { ChatCommand, MessageType } from '../../types';

export const createChatSendMsgMessage = (sendMsgData: ChatCommandSendMsgData): ChatCommandSendMessage => {
    return { version: 1, type: MessageType.ChatCommand, command: ChatCommand.SendMessage, data: sendMsgData };
};
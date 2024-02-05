import { BaseWSMessageType, ChatCommand, MessageType } from '../../types';
import { MessageData } from '../general';

interface BaseChatCommandMessage extends BaseWSMessageType {
    type: MessageType.ChatCommand,
    command: ChatCommand,
};

export interface ChatCommandSendMsgData extends MessageData { };

export interface ChatCommandSendMessage extends BaseChatCommandMessage {
    command: ChatCommand.SendMessage,
    data: ChatCommandSendMsgData,
};
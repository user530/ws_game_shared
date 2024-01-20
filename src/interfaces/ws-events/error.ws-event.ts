import { BaseWSMessageType, MessageType } from '../../types';

export interface ErrorEvent extends BaseWSMessageType {
    type: MessageType.ErrorMessage,
    code: number,
    message: string,
};
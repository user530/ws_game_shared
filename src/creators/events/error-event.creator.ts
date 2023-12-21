import { ErrorEvent } from '../../interfaces/ws-events';
import { MessageType } from '../../types';

export const createErrorEvent = (errorData: Pick<ErrorEvent, 'code' | 'message'>): ErrorEvent => {
    return { version: 1, type: MessageType.ErrorMessage, ...errorData };
};
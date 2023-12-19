import { ErrorEvent } from '../../interfaces/ws-events';

export const createErrorEvent = (errorData: Pick<ErrorEvent, 'code' | 'message'>): ErrorEvent => {
    return { version: 1, type: 'error', ...errorData };
};
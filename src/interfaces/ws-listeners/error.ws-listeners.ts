import { ErrorEvent } from '../ws-events';

export interface ErrorEventsHandler {
    wsErrorListener(errEvent: ErrorEvent): Promise<void>;
};
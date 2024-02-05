export interface ErrorEventsHandler {
    wsErrorListener(errEvent: ErrorEvent): Promise<void>;
};
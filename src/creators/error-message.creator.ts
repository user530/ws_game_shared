import { ErrorMessage } from '../interfaces';

export const createErrorMessage = (errorData: Pick<ErrorMessage, 'code' | 'message'>): ErrorMessage => {
    return { version: 1, type: 'error', ...errorData };
};
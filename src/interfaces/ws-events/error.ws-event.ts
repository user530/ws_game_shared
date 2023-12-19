import { BaseWSMessageType } from '../../types';

export interface ErrorEvent extends BaseWSMessageType {
    type: 'error',
    code: number,
    message: string,
}
import { GameStatus, GameTableCol, GameTableRow } from '../../enums';

export interface StorePlayerData extends PlayerId {
    playerName: string,
};

interface GameBaseData {
    gameId: string,
    host: HostData,
    guest: null | GuestData,
    status: GameStatus,
};

export interface StoreGameData extends GameBaseData {
    turns: TurnData[],
};

export interface LobbyStateData extends GameBaseData {
    status: GameStatus.Pending,
};

export interface OpenLobbyStateData extends LobbyStateData {
    guest: null,
};

export interface GameInstanceStateData extends StoreGameData {
    guest: GuestData,
    status: GameStatus.InProgress,
};

export interface HostData {
    hostId: string,
    hostName: string,
};

export interface GuestData {
    guestId: string,
    guestName: string,
};

export interface RowColumnPair {
    row: GameTableRow,
    column: GameTableCol,
};

export interface PlayerId {
    playerId: string,
};

export interface GamePlayerIdPair extends PlayerId {
    gameId: string,
};

export interface TurnData extends RowColumnPair {
    mark: 'X' | 'O',
};
export type T_AppState = {
    players: T_Player[];
    clicked: boolean;
    previousY: number;
    ownId: number;
};

export type T_Color = 'red' | 'blue' | 'yellow';
export type T_Player = {
    id: number;
    y: number;
    color: T_Color;
    block: T_BlockName;
    position: T_Position;
};

type T_Block = {
    shape: number[][];
    name: T_BlockName;
    startColor: string;
};

type T_Position = { x: number; y: number };
type T_BlockName = 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';

export interface T_ClientToServerEvents {
    connectById: (id: string) => void;
    setColor: (color: T_Color) => void;
    handleYChange: ({ y: number, id: number }) => void;
    joinRoom: () => void;
}
export type T_ClientToServerEndpoints = keyof T_ClientToServerEvents;

export interface T_ServerToClientEvents {
    connectById: (name: string) => void;
    setColor: (color: T_Color) => void;
    handleYChange: ({ y: number, id: number }) => void;
    joinRoom: () => void;
}
export type T_ServerToClientEndpoints = keyof T_ServerToClientEvents;

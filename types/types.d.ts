export type T_AppState = {
    players: T_Player[];
    clicked: boolean;
    previousY: number;
    ownId: number;
};

export type T_Color = "red" | "blue" | "orange";
export type T_Player = {
    id: number;
    y: number;
    color: T_Color;
};

export interface T_ClientToServerEvents {
    connectById: (id: string) => void;
    setColor: (color: T_Color) => void;
}
export type T_ClientToServerEndpoints = keyof T_ClientToServerEvents;

export interface T_ServerToClientEvents {
    connectById: (name: string) => void;
    setColor: (color: T_Color) => void;
}
export type T_ServerToClientEndpoints = keyof T_ServerToClientEvents;

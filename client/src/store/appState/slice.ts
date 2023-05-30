import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { T_AppState, T_Color, T_Player } from '../../../../types';

const initialState: T_AppState = {
    players: [
        {
            id: 1,
            y: 0,
            color: 'blue',
        },
        {
            id: 2,
            y: 0,
            color: 'red',
        },
    ],
    clicked: false,
    previousY: 0,
    ownId: 1,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSelfId: (state, action: PayloadAction<number>) => {
            state.ownId = action.payload;
        },
        joinRoom: (state) => {
            state.players = [
                {
                    id: 1,
                    y: 10,
                    color: 'blue',
                },
                {
                    id: 2,
                    y: 10,
                    color: 'red',
                },
            ];
        },
        addSelf: (state, action: PayloadAction<T_Player>) => {
            state.players = [...state.players, action.payload];
            state.ownId = action.payload.id;
        },
        addPlayer: (state, action: PayloadAction<T_Player>) => {
            state.players = [...state.players, action.payload];
        },
        setPlayerColor: (
            state,
            action: PayloadAction<{ id: number; color: T_Color }>
        ) => {
            state.players = state.players.map((player: T_Player) => {
                if (player.id === action.payload.id) {
                    return { ...player, color: action.payload.color };
                }
                return player;
            });
        },
        click: (state) => {
            state.clicked = true;
        },
        unclick: (state) => {
            state.clicked = false;
        },
        handleYChange: (state, action: PayloadAction<any>) => {
            if (!state.clicked) {
                state.previousY = 0;
                return;
            }
            let previousY = state.previousY;
            const newY = action.payload;
            state.previousY = action.payload;
            if (!previousY) return;
            if (previousY !== newY) {
                state.players = state.players.map((player: T_Player) => {
                    if (player.id === state.ownId) {
                        return { ...player, y: newY };
                    }
                    return player;
                });
            }
        },
        socketYChange: (
            state,
            action: PayloadAction<{ y: number; id: number }>
        ) => {
            state.players = state.players.map((player: T_Player) => {
                if (player.id === action.payload.id) {
                    return { ...player, y: action.payload.y };
                }
                return player;
            });
        },
    },
});

export const {
    setSelfId,
    click,
    unclick,
    handleYChange,
    socketYChange,
    joinRoom,
} = appSlice.actions;

export default appSlice.reducer;

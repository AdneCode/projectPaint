import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { T_AppState, T_Color, T_Player } from '../../../../types';

const initialState: T_AppState = {
    players: [],
    self: {
        id: 0,
        y: 0,
        color: 'blue',
    },
    ownId: 0,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addSelf: (state, action: PayloadAction<T_Player>) => {
            state.self = action.payload;
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
    },
});

export const {} = appSlice.actions;

export default appSlice.reducer;

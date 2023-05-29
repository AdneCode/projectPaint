import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { T_AppState, T_Color, T_Player } from "../../../../types";

const initialState: T_AppState = {
    players: [
        {
            id: 1,
            y: 0,
            color: "blue",
        },
        {
            id: 2,
            y: 0,
            color: "red",
        },
    ],
    clicked: false,
    previousY: 0,
    ownId: 1,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
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
            let previousY = state.previousY;
            const newY = action.payload;
            state.previousY = action.payload;
            if (!previousY) return;
            if (previousY > newY) {
            }
            state.clicked = false;
        },
    },
});

export const { click, unclick, handleYChange } = appSlice.actions;

export default appSlice.reducer;

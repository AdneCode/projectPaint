import { T_RootState } from '..';

export const selectColor = (id: number) => (state: T_RootState) =>
    state.appState.players.find((player) => player.id === id)?.color;

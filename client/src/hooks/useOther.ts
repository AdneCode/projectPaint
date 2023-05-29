import { T_Player } from '../../../types';
import { useAppSelector } from './useAppSelector';

export const useOther = () => {
    return useAppSelector((state) =>
        state.appState.players.find(
            (player: T_Player) => player.id !== state.appState.ownId
        )
    );
};

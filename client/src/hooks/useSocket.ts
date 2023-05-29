import { useContext } from 'react';
import { SocketContext } from '../socket/socket';

export const useSocket = () => {
    return useContext(SocketContext);
};

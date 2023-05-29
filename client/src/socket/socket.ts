import io, { Socket } from 'socket.io-client';
import {
    T_ClientToServerEvents,
    T_ServerToClientEvents,
} from '../../../types/types';

import { createContext } from 'react';
import { hostURL } from '../config';

export const socket: Socket<T_ServerToClientEvents, T_ClientToServerEvents> =
    io(hostURL, {
        transports: ['websocket'],
        autoConnect: true,
    });
export const SocketContext = createContext(socket);

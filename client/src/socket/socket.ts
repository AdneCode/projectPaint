import io, { Socket } from 'socket.io-client';
import {
    ClientToServerEvents,
    ServerToClientEvents,
} from '../../../types/types';

import { createContext } from 'react';
import { hostURL } from '../config/config';

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    hostURL,
    {
        transports: ['websocket'],
        autoConnect: true,
    }
);
export const SocketContext = createContext(socket);

import { Socket as T_Socket } from 'socket.io';
import { T_Io } from '../functions';

export const connectById = (io: T_Io, socket: T_Socket) => {
    const connectById = (id: string) => {
        try {
            socket.emit('connectById', id);
        } catch (error) {
            console.log(error, 'createRoom');
        }
    };
    socket.on('connectById', connectById);
};

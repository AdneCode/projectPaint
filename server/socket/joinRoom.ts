import { Socket as T_Socket } from 'socket.io';
import { T_Io } from '../functions';

export const joinRoom = (io: T_Io, socket: T_Socket) => {
    const joinRoom = () => {
        try {
            console.log('JJR');
            io.emit('joinRoom');
        } catch (error) {
            console.log(error, 'createRoom');
        }
    };
    socket.on('joinRoom', joinRoom);
};

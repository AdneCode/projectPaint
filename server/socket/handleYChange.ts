import { Socket as T_Socket } from 'socket.io';
import { T_Io } from '../functions';

export const handleYChange = (io: T_Io, socket: T_Socket) => {
    const handleYChange = ({ y, id }: { y: number; id: number }) => {
        try {
            console.log('handleYChange', { y, id });
            io.emit('handleYChange', { y, id });
        } catch (error) {
            console.log(error, 'createRoom');
        }
    };
    socket.on('handleYChange', handleYChange);
};

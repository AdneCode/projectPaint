import { joinRoom, socketYChange } from 'src/store';

import { useEffect } from 'react';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useSocket } from 'src/hooks/useSocket';

export const SocketReceiver = () => {
    const dispatch = useAppDispatch();
    const socket = useSocket();
    useEffect(() => {
        socket.connect();
        socket.on('joinRoom', () => {
            console.log('joinRoom');
            dispatch(joinRoom());
        });
        socket.on('handleYChange', ({ y, id }: { y: number; id: number }) => {
            dispatch(socketYChange({ y, id }));
        });
        return () => {
            socket.removeAllListeners();
        };
    }, []);
    return null;
};

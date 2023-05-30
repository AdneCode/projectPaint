import { useEffect } from 'react';
import { Field } from './Field';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useSelf } from './hooks/useSelf';
import { useSocket } from './hooks/useSocket';
import { setSelfId } from './store';

export const Other = () => {
    const dispatch = useAppDispatch();
    const socket = useSocket();
    const self = useSelf();
    useEffect(() => {
        dispatch(setSelfId(2));
        socket.emit('joinRoom');
    }, []);
    console.log(self);
    if (!self || !self.y) return null;
    return <Field />;
};

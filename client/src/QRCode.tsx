import { useEffect, useState } from 'react';

import { QRCodeSVG } from 'qrcode.react';
import { Field } from './Field';
import { getId } from './functions/getId';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useSelf } from './hooks/useSelf';
import { useSocket } from './hooks/useSocket';
import { setSelfId } from './store';

export const QRCode = () => {
    const [value, setValue] = useState('');
    const socket = useSocket();
    const dispatch = useAppDispatch();
    const self = useSelf();
    useEffect(() => {
        const id = getId(5);
        setValue('http://192.168.1.84:3000/twopine/' + id);
        dispatch(setSelfId(1));
    }, []);
    if (!self || !self.y) {
        return (
            <div className="w-screen h-screen flex flex-row justify-center items-center">
                <QRCodeSVG
                    style={{ height: '50%', width: '50%' }}
                    value={value}
                />
            </div>
        );
    }
    return <Field />;
};

import './App.css';

import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Other } from './Other';
import { QRCode } from './QRCode';
import { useOther } from './hooks/useOther';
import { useSelf } from './hooks/useSelf';
import { useSocket } from './hooks/useSocket';
import { SocketReceiver } from './socket/SocketReceiver';

function App() {
    const self = useSelf();
    const other = useOther();
    const dispatch = useDispatch();
    const socket = useSocket();
    return (
        <>
            <SocketReceiver />
            <Routes>
                <Route path="/qr" element=<QRCode /> />
                <Route path="/twopine/:id" element=<Other /> />
            </Routes>
        </>
    );
}

export default App;

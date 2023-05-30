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

    // if (!self?.id) {
    //     return <QRCode id={getId(5)} />;
    // }
    console.log(self);
    console.log(other);
    console.log(self);
    return (
        <>
            <SocketReceiver />
            <Routes>
                <Route path="/qr" element=<QRCode /> />
                <Route path="/twopine/:id" element=<Other /> />
                {/* <div
                className="h-screen w-full bg-red-500"
                onMouseUp={() => dispatch(unclick())}
                onMouseMove={(e: React.MouseEvent) => handleMouseMove(e)}>
                <PlayerDiv id={1} self={self} other={other} />
                <div></div>
                <div></div>
            </div> */}
            </Routes>
        </>
    );
}

export default App;

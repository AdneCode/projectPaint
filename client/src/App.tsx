import './App.css';

import { PlayerDiv } from './PlayerDiv';
import { QRCode } from './QRCode';
import { getId } from './functions/getId';
import { useOther } from './hooks/useOther';
import { useSelf } from './hooks/useSelf';

function App() {
    const self = useSelf();
    const other = useOther();
    if (!self?.id) {
        return <QRCode id={getId(5)} />;
    }
    return (
        <div className="h-screen w-full bg-red-500">
            <PlayerDiv id={1} />
            <div></div>
            <div></div>
        </div>
    );
}

export default App;

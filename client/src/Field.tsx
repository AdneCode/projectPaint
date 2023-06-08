import { handleYChange, unclick } from './store';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlayerBlock } from './PlayerBlock';
import { useOther } from './hooks/useOther';
import { useSelf } from './hooks/useSelf';
import { useSocket } from './hooks/useSocket';

export const Field = () => {
    const dispatch = useDispatch();
    const socket = useSocket();
    const self = useSelf();
    const other = useOther();
    const navigate = useNavigate();
    const handleMouseMove = (e: React.MouseEvent) => {
        if (e.pageY && self) {
            const y = Math.round((e.pageY / window.innerHeight) * 100);
            if (self.y !== y) {
                dispatch(handleYChange(y));
            }
        }
    };
    const handleUnclick = () => {
        if (!self) return;
        dispatch(unclick());
        socket.emit('handleYChange', { y: self.y, id: self.id });
    };
    if (!self || !other) {
        navigate('/');
        return <></>;
    }
    return (
        // className="h-screen w-full bg-red-500 pointer-events-none"
        // onMouseUp={() => handleUnclick()}
        // onMouseMove={(e: React.MouseEvent) => handleMouseMove(e)}>
        // <PlayerDiv id={1} self={self} other={other} />
        // <CentralDiv self={self} other={other} />
        // <PlayerDiv id={2} self={self} other={other}
        <div className="overflow-hidden h-[80vw] w-80 bg-gray-200">
            <PlayerBlock />
        </div>
    );
};

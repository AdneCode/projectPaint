import { handleYChange, unclick } from './store';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlayerBlock } from './PlayerBlock';
import { useOther } from './hooks/useOther';
import { useSelf } from './hooks/useSelf';
import { useSocket } from './hooks/useSocket';
import Draggable from 'react-draggable';

export const Field = () => {
    const dispatch = useDispatch();
    const socket = useSocket();
    const self = useSelf();
    const other = useOther();
    const navigate = useNavigate();
    const handleMouseMove = (e: React.MouseEvent) => {
        if (e.pageY && self) {
            const y =
                self.id === 1
                    ? Math.round((e.pageY / window.innerHeight) * 100)
                    : Math.round(
                          ((window.innerHeight - e.pageY) /
                              window.innerHeight) *
                              100
                      );
            if (self.y !== y && y >= 9) {
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
        <div className="overflow-hidden h-[80vw] w-[80vw] bg-gray-200">
            <PlayerBlock />
        </div>
    );
};

//   //WOUT ZEGT ALS IE PAARS IS IS ER ALTIJD EEN ONDERGRENS EN EEN BOVENGRENS DUS NIEUWE COMPONENT>
//   return (
//     <div
//       className="h-screen w-full"
//       onMouseUp={() => handleUnclick()}
//       onMouseMove={(e: React.MouseEvent) => handleMouseMove(e)}
//     >
//       <FillerDiv id={1} self={self} other={other} />
//       {self.id === 2 && <ClickDiv />}
//       <CentralDiv self={self} other={other} />
//       {self.id === 1 && <ClickDiv />}
//       <FillerDiv id={2} self={self} other={other} />
//     </div>

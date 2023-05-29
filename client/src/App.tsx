import { useDispatch } from "react-redux";
import "./App.css";

import { PlayerDiv } from "./PlayerDiv";
import { useOther } from "./hooks/useOther";
import { useSelf } from "./hooks/useSelf";
import { handleYChange, unclick } from "./store";

function App() {
    const self = useSelf();
    const other = useOther();
    const dispatch = useDispatch();
    const handleMouseMove = (e: React.MouseEvent) => {
        console.log(e.pageY);
        if (e.pageY) {
            dispatch(handleYChange(e.pageY));
        }
    };
    // if (!self?.id) {
    //     return <QRCode id={getId(5)} />;
    // }
    console.log(self);
    console.log(other);
    if (!self || !other) return null;
    console.log(self);
    return (
        <div
            className="h-screen w-full bg-red-500"
            onMouseUp={() => dispatch(unclick())}
            onMouseMove={(e: React.MouseEvent) => handleMouseMove(e)}
        >
            <PlayerDiv id={1} self={self} other={other} />
            <div></div>
            <div></div>
        </div>
    );
}

export default App;

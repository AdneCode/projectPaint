import { handleYChange, unclick } from "./store";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CentralDiv } from "./CentralDiv";
import { ClickDiv } from "./ClickDiv";
import { FillerDiv } from "./FillerDiv";
import { PlayerDiv } from "./PlayerDiv";
import { useOther } from "./hooks/useOther";
import { useSelf } from "./hooks/useSelf";
import { useSocket } from "./hooks/useSocket";

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
            // if (self.id === 2 && self.y !== y && y >= 9) {
            //     console.log(y);
            //     dispatch(handleYChange(y));
            // }
        }
    };
    const handleUnclick = () => {
        if (!self) return;
        dispatch(unclick());
        socket.emit("handleYChange", { y: self.y, id: self.id });
    };
    if (!self || !other) {
        navigate("/");
        return <></>;
    }
    console.log("3", 100 - self.y - other.y > 0);
    if (100 - self.y - other.y > 0) {
        console.log("1");
        return (
            <div
                className="h-screen w-full"
                onMouseUp={() => handleUnclick()}
                onMouseMove={(e: React.MouseEvent) => handleMouseMove(e)}
            >
                <PlayerDiv id={1} self={self} other={other} />
                <CentralDiv self={self} other={other} />
                <PlayerDiv id={2} self={self} other={other} />
            </div>
        );
    }
    console.log("2");
    //WOUT ZEGT ALS IE PAARS IS IS ER ALTIJD EEN ONDERGRENS EN EEN BOVENGRENS DUS NIEUWE COMPONENT>
    return (
        <div
            className="h-screen w-full"
            onMouseUp={() => handleUnclick()}
            onMouseMove={(e: React.MouseEvent) => handleMouseMove(e)}
        >
            <FillerDiv id={1} self={self} other={other} />
            {self.id === 2 && <ClickDiv />}
            <CentralDiv self={self} other={other} />
            {self.id === 1 && <ClickDiv />}
            <FillerDiv id={2} self={self} other={other} />
        </div>
    );
};

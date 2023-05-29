import { T_Player } from "../../types";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { click } from "./store";

export const PlayerDiv = ({
    id,
    self,
    other,
}: {
    id: number;
    self: T_Player;
    other: T_Player;
}) => {
    const dispatch = useAppDispatch();
    if (id !== self.id) {
        <div className="w-full bg-blue-300" style={{ height: "10vh" }}></div>;
    }
    return (
        <>
            <div
                className="w-full bg-blue-300"
                style={{ height: "10vh" }}
            ></div>
            <div
                className="relative bg-orange-300 w-full"
                onClick={() => dispatch(click())}
                style={{ height: "5vh" }}
            ></div>
        </>
    );
};

import { useAppDispatch } from "./hooks/useAppDispatch";
import { click } from "./store";

export const ClickDiv = () => {
    const dispatch = useAppDispatch();

    return (
        <div
            className="relative bg-orange-300 w-full"
            onClick={() => dispatch(click())}
            style={{ height: "5vh" }}
        />
    );
};

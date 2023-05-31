import { useAppDispatch } from "./hooks/useAppDispatch";
import { click } from "./store";

export const ClickDiv = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="absolute w-full"
      onMouseDown={() => dispatch(click())}
      onTouchStart={() => dispatch(click())}
      style={{ height: "5vh" }}
    />
  );
};

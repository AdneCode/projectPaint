import styled from "styled-components";
import { T_Player } from "../../types";
import { ClickDiv } from "./ClickDiv";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { selectColor } from "./store/appState/selectors";
export const PlayerDiv = ({
    id,
    self,
    other,
}: {
    id: number;
    self: T_Player;
    other: T_Player;
}) => {
    const color = useAppSelector(selectColor(id));
    const dispatch = useAppDispatch();
    if (!color) return <></>;
    if (id !== self.id) {
        return (
            <>
                <StyledDiv className="w-full" color={color} y={other.y} />
            </>
        );
    }
    return (
        <>
            {id === 1 && (
                <StyledDiv className="w-full z-10" color={color} y={self.y} />
            )}
            <ClickDiv />
            {id === 2 && (
                <StyledDiv className="w-full z-10" color={color} y={self.y} />
            )}
        </>
    );
};
const StyledDiv = styled.div<{ y: number; color: string }>`
    height: ${(props) => props.y + "vh"};
    background-color: ${(props) => props.color};
`;

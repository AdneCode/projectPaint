import styled from "styled-components";
import { T_Player } from "../../types";
export const FillerDiv = ({
    self,
    other,
    id,
}: {
    self: T_Player;
    other: T_Player;
    id: number;
}) => {
    if (!self || !other) return <></>;
    return (
        <>
            <StyledDiv
                className="w-full"
                y={10}
                color={getColor([self, other], id)}
            />
        </>
    );
};
const StyledDiv = styled.div<{ y: number; color: string | undefined }>`
    height: ${(props) => props.y + "vh"};
    background-color: ${(props) => props.color};'};
`;

const getColor = (players: T_Player[], id: number) => {
    return players.find((player: T_Player) => player.id === id)?.color;
};

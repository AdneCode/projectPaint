import styled from "styled-components";
import { T_Player } from "../../types";
export const CentralDiv = ({
    self,
    other,
}: {
    self: T_Player;
    other: T_Player;
}) => {
    if (!self || !other) return <></>;
    const overHeight = 100 - self.y - other.y > 0;
    return (
        <>
            <StyledDiv
                className="w-full"
                y={Math.abs(100 - self.y - other.y)}
                color={getColor([self, other], 100 - self.y - other.y)}
            />
        </>
    );
};
const StyledDiv = styled.div<{ y: number; color: string }>`
    height: ${(props) => props.y + "vh"};
    background-color: ${(props) => props.color};'};
`;

const getColor = (players: T_Player[], y: number) => {
    let red = 0;
    let blue = 0;
    let yellow = 0;
    if (y > 0) return "white";
    players.map((player: T_Player) => {
        if (player.color === "red") red++;
        if (player.color === "blue") blue++;
        if (player.color === "yellow") yellow++;
    });
    if (red === 2) return "red";
    if (blue === 2) return "blue";
    if (yellow === 2) return "yellow";
    if (red === 1 && blue === 1) return "purple";
    if (red === 1 && yellow === 1) return "orange";
    if (blue === 1 && yellow === 1) return "green";
    return "white";
};

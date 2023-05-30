import styled from 'styled-components';
import { T_Player } from '../../types';
import { useAppDispatch } from './hooks/useAppDispatch';
import { click } from './store';
export const PlayerDiv = ({
    id,
    self,
    other,
}: {
    id: number;
    self: T_Player;
    other: T_Player;
}) => {
    console.log({ id, self, other });
    const dispatch = useAppDispatch();
    if (id !== self.id) {
        console.log('other');
        return (
            <>
                <StyledDiv className="w-full bg-red-300" y={other.y} />
            </>
        );
    }
    return (
        <>
            {id === 1 && (
                <StyledDiv className="w-full bg-blue-300 z-10" y={self.y} />
            )}
            <div
                className="relative bg-orange-300 w-full"
                onClick={() => dispatch(click())}
                style={{ height: '5vh' }}
            />
            {id === 2 && (
                <StyledDiv className="w-full bg-blue-300 z-10" y={self.y} />
            )}
        </>
    );
};
const StyledDiv = styled.div<{ y: number }>`
    height: ${(props) => props.y + 'vh'};
`;

import { useEffect, useRef } from 'react';

import { T_Block } from '../../types';

export const PlayerBlock = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log(gridRef.current?.getBoundingClientRect());
    }, []);
    return (
        <>
            <div ref={gridRef} className="grid grid-cols-3 h-[30%] w-[30%]">
                {blocks[0].shape.map((row) => {
                    return row.map((col) => {
                        if (col === 0) {
                            return <TransparantBlock />;
                        }
                        return <ShapedBlock />;
                    });
                })}
            </div>
        </>
    );
};

const TransparantBlock = () => {
    return (
        <>
            <div className="h-[100%] w-[100%]" />
        </>
    );
};

const ShapedBlock = () => {
    return (
        <>
            <div className="bg-red-400 h-[100%] w-[100%]" />
        </>
    );
};

const blocks: T_Block[] = [
    {
        shape: [
            [0, 0, 1],
            [1, 1, 1],
            [0, 1, 0],
        ],
        name: 'T',
        startColor: 'purple',
    },
    {
        shape: [
            [1, 1, 1, 1],
            [0, 0, 0, 0],
        ],
        name: 'I',
        startColor: 'cyan',
    },
    {
        shape: [
            [1, 1, 1],
            [1, 0, 0],
        ],
        name: 'J',
        startColor: 'blue',
    },
    {
        shape: [
            [1, 1, 1],
            [0, 0, 1],
        ],
        name: 'L',
        startColor: 'orange',
    },
    {
        shape: [
            [1, 1],
            [1, 1],
        ],
        name: 'O',
        startColor: 'yellow',
    },
    {
        shape: [
            [1, 1, 0],
            [0, 1, 1],
        ],
        name: 'S',
        startColor: 'green',
    },
    {
        shape: [
            [0, 1, 1],
            [1, 1, 0],
        ],
        name: 'Z',
        startColor: 'red',
    },
];

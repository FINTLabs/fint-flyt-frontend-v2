import { Node } from 'reactflow';

export default [
    {
        id: '1',
        type: 'variableNode',
        position: { x: 120, y: 120 },
        data: {
            data: {
                category: 'STREAM',
                elementType: {
                    category: 'LIST',
                    elementType: { category: 'LIST', elementType: { category: 'STRING' } },
                },
            },
            displayName: 'Arkivansvarlig',
        },
    },
    {
        id: '5',
        type: 'variableNode',
        position: { x: 120, y: 570 },
        data: {
            data: {
                category: 'MAP',
                keyType: { category: 'STRING' },
                valueType: { category: 'INTEGER (Y)' },
            },
            displayName: 'Case Y',
        },
    },
] as Node[];

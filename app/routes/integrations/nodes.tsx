import { Node } from 'reactflow';

export default [
    {
        id: '1',
        type: 'dataTypeNode',
        position: { x: 120, y: 120 },
        data: {
            category: 'STREAM',
            elementType: { category: 'LIST', elementType: { category: 'STRING' } },
        },
    },
    {
        id: '2',
        type: 'dataTypeNode',
        position: { x: 120, y: 220 },
        data: {
            category: 'LIST',
            elementType: { category: 'STRING' },
        },
    },
    {
        id: '3',
        type: 'dataTypeNode',
        position: { x: 120, y: 320 },
        data: {
            category: 'MAP',
            keyType: { category: 'STRING' },
            valueType: { category: 'INTEGER' },
        },
    },
    
] as Node[];

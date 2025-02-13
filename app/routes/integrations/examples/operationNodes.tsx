import { Node } from 'reactflow';

export default [
    {
        id: '1',
        type: 'operationNode',
        position: { x: 120, y: 120 },
        data: {
            data: {
                category: 'STREAM',
                elementType: { category: 'LIST', elementType: { category: 'STRING' } },
            },
            displayName: 'Arkivansvarlig',
        },
    },
] as Node[];

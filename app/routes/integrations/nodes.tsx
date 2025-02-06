import { Node } from 'reactflow';

export default [
    {
        id: '1',
        type: 'channel',
        position: {
            x: 0,
            y: 0,
        },
        data: {
            nodeType: 'channel',
            inputType: 'input',
            icon: 'ChevronRightDoubleCircleFillIcon',
            label: 'Input',
        },
    },
    {
        id: '6',
        type: 'variableNode',
        position: { x: 120, y: 120 },
        data: {
            data: {
                category: 'STREAM',
                elementType: { category: 'LIST', elementType: { category: 'STRING' } },
            },
            displayName: 'Arkivansvarlig',
        },
    },
    {
        id: '2',
        type: 'variableNode',
        position: { x: 120, y: 240 },
        data: {
            data: {
                category: 'STREAM',
                elementType: { category: 'LIST', elementType: { category: 'STRING' } },
            },
            displayName: 'Saksnummer',
        },
    },
    {
        id: '9',
        type: 'variableInlineNode',
        position: { x: 120, y: 500 },
        data: {
            category: 'BOOLEAN',
        },
    },
    {
        id: '10',
        type: 'variableInlineNode',
        position: { x: 120, y: 600 },
        data: {
            category: 'RECORD',
            recordTypeDeclarationId: 'TIME',
        },
    },
    {
        id: '11',
        type: 'variableInlineNode',
        position: { x: 120, y: 700 },
        data: {
            category: 'RECORD',
            recordTypeDeclarationId: 'DATE',
        },
    },
    {
        id: '12',
        type: 'variableInlineNode',
        position: { x: 120, y: 800 },
        data: {
            category: 'RECORD',
            recordTypeDeclarationId: 'DATETIME',
        },
    },
] as Node[];

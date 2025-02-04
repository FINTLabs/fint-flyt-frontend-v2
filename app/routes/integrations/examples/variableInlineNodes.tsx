import { Node } from 'reactflow';

export default [
    {
        id: '6',
        type: 'variableInlineNode',
        position: { x: 120, y: 30 },
        data: {
            category: 'STRING',
        },
    },
    {
        id: '7',
        type: 'variableInlineNode',
        position: { x: 120, y: 140 },
        data: {
            category: 'INTEGER',
        },
    },
    {
        id: '8',
        type: 'variableInlineNode',
        position: { x: 120, y: 250 },
        data: {
            category: 'DECIMAL',
        },
    },
    {
        id: '9',
        type: 'variableInlineNode',
        position: { x: 120, y: 360 },
        data: {
            category: 'BOOLEAN',
        },
    },
    {
        id: '10',
        type: 'variableInlineNode',
        position: { x: 120, y: 470 },
        data: {
            category: 'RECORD',
            recordTypeDeclarationId: 'TIME',
        },
    },
    {
        id: '11',
        type: 'variableInlineNode',
        position: { x: 120, y: 580 },
        data: {
            category: 'RECORD',
            recordTypeDeclarationId: 'DATE',
        },
    },
    {
        id: '12',
        type: 'variableInlineNode',
        position: { x: 120, y: 690 },
        data: {
            category: 'RECORD',
            recordTypeDeclarationId: 'DATETIME',
        },
    },
] as Node[];

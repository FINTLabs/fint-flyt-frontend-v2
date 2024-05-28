import { Node } from 'reactflow';

export default [
    {
        id: '1',
        position: { x: 0, y: 100 },
        type: "input"
    },

    {
        id: '2',
        // type: 'colorChooser',
        data: { color: '#F6E05E' },
        position: { x: 350, y: 125 },
        type: "openObject"
    },
    {
        id: '3',
        // type: 'colorChooser',
        data: { color: '#B794F4' },
        position: { x: 250, y: 250 },
    },
] as Node[];

import { Node } from 'reactflow';

export default [
    {
        id: '1',
        // type: 'colorChooser',
        data: { color: '#4FD1C5' },
        position: { x: 250, y: 25 },
    },

    {
        id: '2',
        // type: 'colorChooser',
        data: { inputType: 'text' },
        position: { x
                :
                214.95088154139262,
            y
                :
                70.51984453315458},
        type: 'static',
        // parentId: '3',
        expandParent: true,
    },
    {
        id: '3',
        // type: 'colorChooser',
        data: { inputType: 'subflow-if-else' },
        position: { x: 250, y: 250 },
        type: 'subflow',
    },
] as Node[];

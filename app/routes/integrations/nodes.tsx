import { Node } from 'reactflow';
import DataTypeNode from '~/routes/integrations/nodes/DataTypeNode';

// Register the custom node component as a new node type
export const nodeTypes = {
    dataTypeNode: DataTypeNode, // Register 'dataTypeNode' as a type
};

export default [
    {
        id: '1',
        type: 'dataTypeNode', // Use your custom node type here
        position: { x: 120, y: 120 },
        data: {
            category: 'STREAM',
            elementType: { category: 'LIST', elementType: { category: 'STRING' } },
        },
    },
] as Node[];

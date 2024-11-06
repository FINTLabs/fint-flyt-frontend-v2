import { Handle } from 'reactflow';
import { CategoryType, DataType, ListType, MapType, StreamType } from '~/types/types';

interface NodeData {
    data: DataType;
    displayName: string;
}

interface VariableNodeProps {
    data: NodeData;
}

const VariableNode: React.FC<VariableNodeProps> = ({ data }) => {
    return (
        <>
            <p className="text-sm">Variable Node</p>
            <div className="p-4 border rounded border-gray-400 flex flex-row gap-2">
                <label className="p-2 border rounded border-gray-400 ">{data.data.category}</label>
                <label className="p-2 border rounded border-gray-400 ">{data.displayName}</label>
            </div>
        </>
    );
};

export default VariableNode;

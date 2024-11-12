import { DataType } from '~/types/types';
import DataTypeComponent from './UI/DataType';
import { DisplayNameComponent } from './UI/DisplayName';
import { Handle, Position } from 'reactflow';

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
            <p className="text-sm absolute top-[-16px]">Variable Node</p>
            <div className="bg-blue-200 p-2 rounded border border-gray-400">
                <div className=" flex flex-row gap-2">
                    <DataTypeComponent data={data.data} />
                    <DisplayNameComponent displayName={data.displayName}></DisplayNameComponent>
                </div>
            </div>
            <Handle
                type={'source'}
                position={Position.Right}
                id={'123'}
                className="absolute !right-0.5 !z-10 !w-3 !h-3 !bg-teal-500"
            />
        </>
    );
};

export default VariableNode;

import { DataType } from '~/types/types';
import DataTypeComponent from './UI/DataType';
import { DisplayNameComponent } from './UI/DisplayName';

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
            <div className="bg-blue-200 p-4 rounded border border-gray-400">
                <div className=" flex flex-row gap-2">
                    <DataTypeComponent data={data.data} />
                    <DisplayNameComponent displayName={data.displayName}></DisplayNameComponent>
                </div>
            </div>
        </>
    );
};

export default VariableNode;

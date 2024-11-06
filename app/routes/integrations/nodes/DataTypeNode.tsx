import { Handle } from 'reactflow';
import { CategoryType, DataType, ListType, MapType, StreamType } from '~/types/types';

interface DataTypeNodeProps {
    data: DataType;
    isChild?: boolean;
    isMap?: boolean;
}

const getMapLabel = (data: MapType): string => {
    return `${data.keyType.category} -> ${data.valueType.category}`;
};

const DataTypeNode: React.FC<DataTypeNodeProps> = ({ data, isChild = false, isMap = false }) => {
    const renderChildElement = () => {
        if (isMap) return null;

        switch (data.category) {
            case CategoryType.STREAM:
                return <DataTypeNode isChild data={(data as StreamType).elementType} />;
            case CategoryType.LIST:
                return <DataTypeNode isChild data={(data as ListType).elementType} />;
            case CategoryType.MAP:
                return <DataTypeNode isChild isMap data={data as MapType} />;
            default:
                return null;
        }
    };

    const label = isMap ? getMapLabel(data as MapType) : data.category;

    return (
        <div>
            {!isChild && <p className="text-sm">DataType Node</p>}
            <div className="flex inline">
                <div
                    className={`
                    flex p-3 border border-gray-400 
                    rounded-tr-md rounded-br-md 
                    relative last:-left-2
                    ${isChild ? 'border-l-0 -left-1' : ''}
                `}>
                    <label>{label}</label>
                    {/* <Handle type="source" /> */}
                </div>
                {renderChildElement()}
            </div>
        </div>
    );
};

export default DataTypeNode;

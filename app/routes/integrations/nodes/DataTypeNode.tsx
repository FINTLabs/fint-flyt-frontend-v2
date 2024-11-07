import { Handle, Position } from 'reactflow';
import { CategoryType, DataType, ListType, MapType, StreamType } from '~/types/types';

interface DataTypeNodeProps {
    data: DataType;
    isChild?: boolean;
    parentCategory?: string;
}

const getMapLabel = (data: MapType): string => {
    return `${data.keyType.category} -> ${data.valueType.category}`;
};

const DataTypeNode: React.FC<DataTypeNodeProps> = ({
    data,
    isChild = false,
    parentCategory = '',
}) => {
    const renderChildElement = () => {
        if (parentCategory === CategoryType.MAP) return null; // otherwise we will get an inifite loop

        switch (data.category) {
            case CategoryType.STREAM:
                return <DataTypeNode isChild data={(data as StreamType).elementType} />;
            case CategoryType.LIST:
                return <DataTypeNode isChild data={(data as ListType).elementType} />;
            case CategoryType.MAP:
                return (
                    <DataTypeNode
                        isChild
                        parentCategory={CategoryType.MAP}
                        data={data as MapType}
                    />
                );
            default:
                return null;
        }
    };

    const label =
        parentCategory === CategoryType.MAP ? getMapLabel(data as MapType) : data.category;

    return (
        <div className="">
            <div className="flex">
                {!isChild && <p className="absolute text-sm top-[-20px]">DataType Node</p>}

                <div
                    className={`
                    flex p-3 border border-gray-400 
                    rounded-tr-md rounded-br-md 
                    relative last:-left-2
                    ${isChild ? 'border-l-0 -left-1' : ''}
                `}>
                    <label>{label}</label>
                </div>

                {renderChildElement()}
            </div>
            {!isChild && (
                <Handle
                    type={'source'}
                    position={Position.Right}
                    id={'123'}
                    className="absolute !right-0.5 !z-10 !w-3 !h-3 !bg-teal-500"
                />
            )}
        </div>
    );
};

export default DataTypeNode;

import { CategoryType, DataType, ListType, MapType, StreamType } from '~/types/types';

interface DataTypeNodeProps {
    data: DataType;
    isChild?: boolean;
    parentCategory?: string;
    zIndex?: number;
}

const getMapLabel = (data: MapType): string => {
    return `${data.keyType.category} -> ${data.valueType.category}`;
};

// SKal ligge inn i en handle (er ikke node alene)
const DataTypeComponent: React.FC<DataTypeNodeProps> = ({
    data,
    isChild = false,
    parentCategory = '',
    zIndex = 40,
}) => {
    const renderChildElement = () => {
        if (parentCategory === CategoryType.MAP) return null; // otherwise we will get an inifite loop
        zIndex = zIndex - 10;

        switch (data.category) {
            case CategoryType.STREAM:
                zIndex = zIndex - 10;

                return (
                    <DataTypeComponent
                        isChild
                        zIndex={zIndex}
                        data={(data as StreamType).elementType}
                    />
                );
            case CategoryType.LIST:
                zIndex = zIndex - 10;

                return (
                    <DataTypeComponent
                        isChild
                        zIndex={zIndex}
                        data={(data as ListType).elementType}
                    />
                );
            case CategoryType.MAP:
                zIndex = zIndex - 10;
                return (
                    <DataTypeComponent
                        isChild
                        zIndex={zIndex}
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
        <>
            <div
                className={`
                    p-[5px] border border-gray-400/50 bg-[#FFE6C1]
                    rounded-tr-3xl rounded-br-3xl 
                    first:rounded-tl-3xl first:rounded-bl-3xl 
                    first:ml-0
                    relative ml-[-15px]
                    first:pr-2 first:pl-2 
                    pl-5 pr-3
                    ${isChild ? `z-${zIndex} relative pl-4 last:bg-red-500 last:font-bold` : `z-${zIndex}`}
                `}>
                <label className="">{label}</label>
            </div>
            {renderChildElement()}
        </>
    );
};

export default DataTypeComponent;

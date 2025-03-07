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
const DataTypeComponent: React.FC<DataTypeNodeProps> = ({ data, zIndex = 40 }) => {
    return (
        <>
            <Label title={data.category} zIndex={zIndex} />
            {/* {unWrapDataType(data)} */}
            <UnwrapDatatype dataType={data} zIndex={zIndex} />
        </>
    );
};

export default DataTypeComponent;

interface LabelProps {
    title?: string;
    zIndex: number;
}

function Label({ title, zIndex }: LabelProps) {
    return (
        <div
            style={{ zIndex: zIndex }}
            className={`
                    p-[5px] border border-gray-500/50 bg-[#FFE6C1]
                    rounded-tr-3xl rounded-br-3xl 
                    first:rounded-tl-3xl first:rounded-bl-3xl 
                    first:ml-0
                    relative ml-[-15px]
                    first:pr-5 first:pl-5
                    pl-7 pr-5
                    
                `}>
            <label className="">{title}</label>
        </div>
    );
}

interface UnwrapDatatypeProps {
    dataType: DataType;
    zIndex: number;
}
const UnwrapDatatype: React.FC<UnwrapDatatypeProps> = ({ dataType, zIndex }) => {
    let elementType = null;

    switch (dataType.category) {
        case CategoryType.STREAM:
            zIndex = zIndex - 10;
            elementType = (dataType as StreamType).elementType;
            return (
                <>
                    <Label title={elementType.category} zIndex={zIndex} />
                    <UnwrapDatatype dataType={elementType} zIndex={zIndex} />
                </>
            );
        case CategoryType.LIST:
            zIndex = zIndex - 10;
            elementType = (dataType as ListType).elementType;
            return (
                <>
                    <Label title={elementType.category} zIndex={zIndex} />
                    <UnwrapDatatype dataType={elementType} zIndex={zIndex} />
                </>
            );

        case CategoryType.MAP:
            zIndex = zIndex - 10;
            const mapType = dataType as MapType;
            const title = `${mapType.keyType.category}, ${mapType.valueType.category}`;
            console.log(mapType);
            return (
                <>
                    <Label title={title} zIndex={zIndex} />
                    {/* <UnwrapDatatype dataType={elementType} zIndex={zIndex} /> */}
                </>
            );
        default:
            return <></>;
    }
};

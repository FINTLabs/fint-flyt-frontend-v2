import { ChevronDownIcon } from '@navikt/aksel-icons';
import { Button, Select } from '@navikt/ds-react';
import { useState } from 'react';
import { CategoryType, DataType, ListType, MapType, StreamType } from '~/types/types';

interface DataTypeNodeProps {
    data: DataType;
    isChild?: boolean;
    isEditing?: boolean;
    parentCategory?: string;
    zIndex?: number;
}

const getMapLabel = (data: MapType): string => {
    return `${data.keyType.category} -> ${data.valueType.category}`;
};

// SKal ligge inn i en handle (er ikke node alene)
const DataTypeComponent: React.FC<DataTypeNodeProps> = ({ data, zIndex = 40, isEditing }) => {
    return (
        <>
            <Label title={data.category} zIndex={zIndex} isEditing={isEditing} />
            {/* {unWrapDataType(data)} */}
            <UnwrapDatatype dataType={data} zIndex={zIndex} isEditing={isEditing} />
        </>
    );
};

export default DataTypeComponent;

interface SelectDataTypeProps {
    defaultValue?: string;
    onSelect?: (value: string) => void;
}

function SelectDataType({ defaultValue = '', onSelect }: SelectDataTypeProps) {
    return (
        <select
            className={`bg-white ring-0 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 rounded-3xl px-2 hover:bg-orange-100`}
            defaultValue={defaultValue}
            onChange={(e) => onSelect?.(e.target.value)}>
            <option value="LIST">LIST</option>
            <option value="STRING">STRING</option>
            <option value="STREAM">STREAM</option>
        </select>
    );
}

interface LabelProps {
    title?: string;
    isEditing?: boolean;
    zIndex: number;
}

function Label({ title, zIndex, isEditing }: LabelProps) {
    return (
        <>
            <div
                style={{ zIndex: zIndex }}
                className={`
              p-[5px] border border-gray-500/50 bg-[#FFE6C1]
              rounded-tr-3xl rounded-br-3xl 
              first:ml-0
              relative ml-[-15px]
              flex gap-1.5
              ${isEditing ? 'first:pr-1 first:pl-2 pl-6 pr-1 bg-orange-200' : 'first:pr-5 first:pl-5 pl-7 pr-5'}
              
          `}>
                {!isEditing && (
                    <label className={`${isEditing ? 'cursor:pointer' : ''}`}>{title}</label>
                )}
                {isEditing && <SelectDataType defaultValue={title} onSelect={() => {}} />}
            </div>
        </>
    );
}

interface UnwrapDatatypeProps {
    dataType: DataType;
    zIndex: number;
    isEditing?: boolean;
}
const UnwrapDatatype: React.FC<UnwrapDatatypeProps> = ({ dataType, zIndex, isEditing }) => {
    let elementType = null;

    switch (dataType.category) {
        case CategoryType.STREAM:
            zIndex = zIndex - 10;
            elementType = (dataType as StreamType).elementType;
            return (
                <>
                    <Label title={elementType.category} zIndex={zIndex} isEditing={isEditing} />
                    <UnwrapDatatype dataType={elementType} zIndex={zIndex} isEditing={isEditing} />
                </>
            );
        case CategoryType.LIST:
            zIndex = zIndex - 10;
            elementType = (dataType as ListType).elementType;
            return (
                <>
                    <Label title={elementType.category} zIndex={zIndex} isEditing={isEditing} />
                    <UnwrapDatatype dataType={elementType} zIndex={zIndex} isEditing={isEditing} />
                </>
            );

        case CategoryType.MAP:
            zIndex = zIndex - 10;
            const mapType = dataType as MapType;
            const title = `${mapType.keyType.category}, ${mapType.valueType.category}`;
            console.log(mapType);
            return (
                <>
                    <Label title={title} zIndex={zIndex} isEditing={isEditing} />
                    {/* <UnwrapDatatype dataType={elementType} zIndex={zIndex} /> */}
                </>
            );
        default:
            return <></>;
    }
};

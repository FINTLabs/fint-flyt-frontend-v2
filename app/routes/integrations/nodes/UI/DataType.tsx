import { ChevronDownIcon } from '@navikt/aksel-icons';
import { Button, Select } from '@navikt/ds-react';
import { useState } from 'react';
import { Category, CategoryType, DataType, ListType, MapType, StreamType } from '~/types/types';

interface DataTypeNodeProps {
    data: DataType;
    isChild?: boolean;
    isEditing?: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    zIndex?: number;
}

const getMapLabel = (data: MapType): string => {
    return `${data.keyType.category} -> ${data.valueType.category}`;
};

type DataTypeLabel = {
    position: number;
    dataType: DataType;
};

const addDataTypeToList = (data: DataType, list: DataTypeLabel[], position: number) => {
    const onStream = (dataType: DataType, elementType: DataType) => {
        const newPosition = position + 1;
        list.push({
            position: newPosition,
            dataType: dataType,
        });

        return addDataTypeToList(elementType, list, newPosition);
    };

    const onList = (dataType: DataType, elementType: DataType) => {
        const newPosition = position + 1;
        list.push({
            position: newPosition,
            dataType: dataType,
        });

        return addDataTypeToList(elementType, list, newPosition);
    };

    const onMap = (dataType: DataType, title: string) => {
        const newPosition = position + 1;
        list.push({
            position: newPosition,
            dataType: dataType,
        });
        return list;
    };

    const onDefault = (dataType: DataType) => {
        const newPosition = position + 1;
        list.push({
            position: newPosition,
            dataType: dataType,
        });

        return list;
    };

    onCategoryType(data, onStream, onList, onMap, onDefault);
};

const onCategoryType = (
    dataType: DataType,
    onStream: (dataType: DataType, elementType: DataType) => void,
    onList: (dataType: DataType, elementType: DataType) => void,
    onMap: (dataType: DataType, title: string) => void,
    onDefault: (dataType: DataType) => void
) => {
    let elementType = null;

    switch (dataType.category) {
        case CategoryType.STREAM:
            elementType = (dataType as StreamType).elementType;
            return onStream(dataType, elementType);
        case CategoryType.LIST:
            elementType = (dataType as ListType).elementType;
            return onList(dataType, elementType);
        case CategoryType.MAP:
            const mapType = dataType as MapType;
            const title = `${mapType.keyType.category}, ${mapType.valueType.category}`;
            return onMap(dataType, title);
        default:
            return onDefault(dataType);
    }
};

const destructDataType = (data: DataType) => {
    const list: DataTypeLabel[] = [];
    let position = 0;
    addDataTypeToList(data, list, position);
    return list;
};
// SKal ligge inn i en handle (er ikke node alene)
const DataTypeComponent: React.FC<DataTypeNodeProps> = ({
    data,
    zIndex = 100,
    isEditing,
    setIsEditing,
}) => {
    const list = destructDataType(data);

    return (
        <>
            {list.map((item) => {
                zIndex = zIndex - 10;
                return (
                    <Label
                        key={item.position}
                        title={item.dataType.category}
                        zIndex={zIndex}
                        isEditing={isEditing}
                        onClick={() => setIsEditing((prev) => !prev)}
                    />
                );
            })}
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
            <option value="MAP">MAP</option>
            <option value="DECIMAL">DECIMAL</option>
            <option value="BOOLEAN">BOOLEAN</option>
            <option value="RECORD">RECORD</option>
        </select>
    );
}

interface LabelProps {
    title?: string;
    isEditing?: boolean;
    onClick: () => void;
    zIndex: number;
}

function Label({ title, zIndex, isEditing, onClick }: LabelProps) {
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
                    <label
                        onClick={() => {
                            console.log('teest');
                            onClick();
                        }}
                        className={`${isEditing ? 'cursor:pointer' : ''}`}>
                        {title}
                    </label>
                )}
                {isEditing && <SelectDataType defaultValue={title} onSelect={() => {}} />}
            </div>
        </>
    );
}

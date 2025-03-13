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

type DataTypeChip = {
    position: number;
    dataType?: DataType;
};

const addDataTypeToList = (data: DataType, list: DataTypeChip[], position: number) => {
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
    const list: DataTypeChip[] = [];
    let position = 0;
    addDataTypeToList(data, list, position);
    return list;
};

const SelectDataTypeOption = 'Velg DataType';

// SKal ligge inn i en handle (er ikke node alene)
const DataTypeComponent: React.FC<DataTypeNodeProps> = ({
    data,
    zIndex = 100,
    isEditing,
    setIsEditing,
}) => {
    const [labels, setLabels] = useState(destructDataType(data));

    return (
        <>
            {labels.map((item) => {
                zIndex = zIndex - 10;

                return (
                    <Label
                        key={item.position}
                        position={item.position}
                        title={item.dataType ? item.dataType.category : SelectDataTypeOption}
                        zIndex={zIndex}
                        isEditing={isEditing}
                        onClick={() => setIsEditing((prev) => !prev)}
                        onSelect={(value, position) => {
                            console.log(value);
                            const newDataType: DataTypeChip = {
                                position: position,
                                dataType: {
                                    category: value,
                                },
                            };

                            let newList = [
                                ...labels.slice(0, position - 1), // Take elements before the insert position
                                newDataType, // Insert the new item
                            ];

                            if (value === CategoryType.LIST || value === CategoryType.STREAM) {
                                const newSelectableDataType: DataTypeChip = {
                                    position: newList.length + 1,
                                };
                                newList = [...newList, newSelectableDataType];
                            }

                            console.log(newList);
                            setLabels(newList);
                        }}
                    />
                );
            })}
        </>
    );
};

export default DataTypeComponent;

interface SelectDataTypeProps {
    defaultValue?: string;
    onSelect: (value: Category) => void;
}

function SelectDataType({ defaultValue = '', onSelect }: SelectDataTypeProps) {
    const categories: Category[] = [
        'STREAM',
        'MAP',
        'LIST',
        'RECORD',
        'STRING',
        'INTEGER',
        'DECIMAL',
        'BOOLEAN',
    ];

    return (
        <select
            className="bg-white ring-0 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 rounded-3xl px-2 hover:bg-orange-100"
            defaultValue={defaultValue}
            onChange={(e) => onSelect(e.target.value as Category)}>
            <option key={SelectDataTypeOption} value={SelectDataTypeOption}>
                {SelectDataTypeOption}
            </option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
}

interface LabelProps {
    title?: string;
    isEditing?: boolean;
    onClick: () => void;
    zIndex: number;
    position: number;
    onSelect: (value: Category, position: number) => void;
}

function Label({ title, zIndex, isEditing, onClick, position, onSelect }: LabelProps) {
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
                    <label onClick={onClick} className={`${isEditing ? 'cursor:pointer' : ''}`}>
                        {title}
                    </label>
                )}
                {isEditing && (
                    <SelectDataType
                        defaultValue={title}
                        onSelect={(value) => {
                            onSelect(value, position);
                        }}
                    />
                )}
            </div>
        </>
    );
}

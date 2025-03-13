import { DataType, CategoryType, StreamType, ListType, MapType } from '~/types/types';
import { DataTypeChip } from './types/DataTypeChip';

const addDataTypeToChipList = (data: DataType, list: DataTypeChip[], position: number) => {
    const onStream = (dataType: DataType, elementType: DataType) => {
        const newPosition = position + 1;
        list.push({
            position: newPosition,
            dataType: dataType,
        });

        return addDataTypeToChipList(elementType, list, newPosition);
    };

    const onList = (dataType: DataType, elementType: DataType) => {
        const newPosition = position + 1;
        list.push({
            position: newPosition,
            dataType: dataType,
        });

        return addDataTypeToChipList(elementType, list, newPosition);
    };

    const onMap = (dataType: DataType) => {
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

    onDataTypeCategorySwitch(data, onStream, onList, onMap, onDefault);
};

const onDataTypeCategorySwitch = (
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

const getMapLabel = (data: MapType): string => {
    return `${data.keyType.category} -> ${data.valueType.category}`;
};

export const destructDataType = (data: DataType) => {
    const list: DataTypeChip[] = [];
    let position = 0;
    addDataTypeToChipList(data, list, position);
    return list;
};

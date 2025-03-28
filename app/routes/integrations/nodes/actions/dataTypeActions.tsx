import { DataType, CategoryType, StreamType, ListType, MapType } from '~/types/types';
import { DataTypeChip } from '../UI/types/DataTypeChip';

interface DataTypeProcessor {
    processStream: (dataType: StreamType) => DataTypeChip[];
    processList: (dataType: ListType) => DataTypeChip[];
    processMap: (dataType: MapType) => DataTypeChip[];
    processDefault: (dataType: DataType) => DataTypeChip[];
}

const createDataTypeChips = (
    dataType: DataType,
    position: number = 0,
    chips: DataTypeChip[] = []
): DataTypeChip[] => {
    // Add current type to chip list
    const addChip = () => {
        chips.push({
            position: position + 1,
            dataType,
        });
    };

    // Process nested types
    const processor: DataTypeProcessor = {
        processStream: (streamType: StreamType) => {
            addChip();
            return createDataTypeChips(streamType.elementType, position + 1, chips);
        },

        processList: (listType: ListType) => {
            addChip();
            return createDataTypeChips(listType.elementType, position + 1, chips);
        },

        processMap: (mapType: MapType) => {
            addChip();
            return chips;
        },

        processDefault: (defaultType: DataType) => {
            addChip();
            return chips;
        },
    };

    // Process based on type
    switch (dataType.category) {
        case CategoryType.STREAM:
            return processor.processStream(dataType as StreamType);
        case CategoryType.LIST:
            return processor.processList(dataType as ListType);
        case CategoryType.MAP:
            return processor.processMap(dataType as MapType);
        default:
            return processor.processDefault(dataType);
    }
};

export const destructDataTypeToChips = (data: DataType) => {
    return createDataTypeChips(data);
};

// Reconstruct data type from chip list
export function reconstructDataType(chips: DataTypeChip[]): DataType | null {
    // Sort chips by position to ensure correct order
    const sortedChips = [...chips].sort((a, b) => a.position - b.position);
    if (sortedChips.length === 0) return null;

    // Start with the last chip (innermost type)
    let result: DataType = { ...(sortedChips[sortedChips.length - 1].dataType as DataType) };

    // Work backwards through the array to build nested structure
    for (let i = sortedChips.length - 2; i >= 0; i--) {
        const currentChip = sortedChips[i];

        switch (currentChip.dataType?.category) {
            case CategoryType.STREAM:
                result = {
                    ...currentChip.dataType,

                    elementType: result as StreamType,
                } as StreamType;
                break;
            case CategoryType.LIST:
                result = {
                    ...currentChip.dataType,
                    elementType: result,
                } as ListType;
                break;
            case CategoryType.MAP:
                result = {
                    ...currentChip.dataType,
                    // Preserve the original MAP type's key and value types
                    keyType: (currentChip.dataType as MapType).keyType,
                    valueType: (currentChip.dataType as MapType).valueType,
                } as MapType;
                break;
            default:
                result = { ...currentChip.dataType } as DataType;
        }
    }

    return result;
}

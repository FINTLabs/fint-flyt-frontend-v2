import { ChevronDownIcon } from '@navikt/aksel-icons';
import { Button, Select } from '@navikt/ds-react';
import { useState } from 'react';
import { CategoryType, DataType, MapType } from '~/types/types';
import { Label } from './Label';
import { destructDataType as convertDataTypeToChips } from './destructDataType';
import { DataTypeChip } from './types/DataTypeChip';
import { SelectDataTypeOption } from './SelectDataType';

interface DataTypeNodeProps {
    data: DataType;
    isChild?: boolean;
    isEditing?: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    zIndex?: number;
}

// SKal ligge inn i en handle (er ikke node alene)
const DataTypeComponent: React.FC<DataTypeNodeProps> = ({
    data,
    zIndex = 100,
    isEditing,
    setIsEditing,
}) => {
    const [chips, setChips] = useState(convertDataTypeToChips(data));

    return (
        <>
            {chips.map((item) => {
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
                            const newChip: DataTypeChip = {
                                position: position,
                                dataType: {
                                    category: value,
                                },
                            };

                            let newChips = [
                                ...chips.slice(0, position - 1), // Take elements before the insert position
                                newChip, // Insert the new item
                            ];

                            if (value === CategoryType.LIST || value === CategoryType.STREAM) {
                                const newSelectableDataType: DataTypeChip = {
                                    position: newChips.length + 1,
                                };
                                newChips = [...newChips, newSelectableDataType];
                            }

                            console.log(newChips);
                            setChips(newChips);
                        }}
                    />
                );
            })}
        </>
    );
};

export default DataTypeComponent;

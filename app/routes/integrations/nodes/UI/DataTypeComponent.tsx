import { ChevronDownIcon } from '@navikt/aksel-icons';
import { Button, Select } from '@navikt/ds-react';
import { useEffect, useState } from 'react';
import { Category, CategoryType, DataType, MapType } from '~/types/types';
import { Label } from './Label';
import {
    destructDataTypeToChips as convertDataTypeToChips,
    reconstructDataType,
} from '../actions/dataTypeActions';
import { DataTypeChip } from './types/DataTypeChip';
import { SelectDataTypeOption } from './SelectDataType';

interface DataTypeNodeProps {
    data: DataType;
    isChild?: boolean;
    isEditing?: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    zIndex?: number;
    triggerValidation?: boolean;
    triggerReset?: boolean;
    setTriggerValidation: React.Dispatch<React.SetStateAction<boolean>>;
    setTriggerReset: React.Dispatch<React.SetStateAction<boolean>>;
}

// SKal ligge inn i en handle (er ikke node alene)
const DataTypeComponent: React.FC<DataTypeNodeProps> = ({
    data,
    zIndex = 100,
    isEditing,
    setIsEditing,
    triggerValidation,
    triggerReset,
    setTriggerValidation,
    setTriggerReset,
}) => {
    const [chips, setChips] = useState(convertDataTypeToChips(data));

    const validate = () => {
        console.log('Validating DataType...');
        const hasMissingDataType = chips.some((chip) => chip.dataType === undefined);
        if (hasMissingDataType) {
            alert('Kan ikke lagre! Velg datatype');
        } else {
            // save new data type
            console.log(chips);
            console.log('Saving ...');
            const newDataType = reconstructDataType(chips);
            console.log('newDataType');
            console.log(newDataType);

            setIsEditing((prev) => !prev);
        }
    };

    const reset = () => {
        console.log('Resetting inside DataTypeComponent...');
        setChips(convertDataTypeToChips(data));
        setIsEditing((prev) => !prev);
    };

    useEffect(() => {
        if (triggerValidation) {
            validate();
            setTriggerValidation(false);
        }
    }, [triggerValidation]);

    useEffect(() => {
        if (triggerReset) {
            reset();
            setTriggerReset(false);
        }
    }, [triggerReset]);

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
                            let newChip: DataTypeChip = {
                                position: position,
                            };

                            if (value) {
                                newChip.dataType = {
                                    category: value,
                                };
                            }

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

                            console.log('newChips');
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

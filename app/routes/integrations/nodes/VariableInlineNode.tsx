import { DatePicker, Switch, TextField, useDatepicker } from '@navikt/ds-react';
import { CategoryType, DataType, RecordType } from '~/types/types';
import { getIcon } from './utils';

interface NodeData {
    data: DataType;
}

// interface VariableInlineNodeProps {
//     data: DataType;
// }

function getTextFieldTypeRecord(recordType: string) {
    switch (recordType) {
        case 'TIME':
            return 'text';
        case 'INTEGER':
            return 'number';
        case 'DECIMAL':
            return 'text';
        default:
            return 'text';
    }
}

function getTextFieldType(category: string) {
    switch (category) {
        case 'STRING':
            return 'text';
        case 'INTEGER':
            return 'number';
        case 'DECIMAL':
            return 'text';
        default:
            return 'text';
    }
}

function getPlaceholder(category: string) {
    switch (category) {
        case 'STRING':
            return 'abc...';
        case 'INTEGER':
            return '123...';
        case 'DECIMAL':
            return '3.14...';
        default:
            return 'text';
    }
}

const VariableInlineNode: React.FC<NodeData> = ({ data }) => {
    if (data.category == 'RECORD') {
        console.log('cast to:');
        const recordObj = data as RecordType;
        console.log(recordObj);
    }

    const { datepickerProps, inputProps } = useDatepicker({
        fromDate: new Date(),
        onDateChange: console.log,
    });
    return (
        <div className="flex flex-col">
            <p className="text-sm">Handle Display</p>
            <div className="bg-blue-200 p-2 rounded border border-gray-400">
                <div className=" flex flex-row gap-2">
                    <div className="flex">
                        <div className="flex">
                            <div
                                className={`
                    flex p-[5px] border border-gray-400 
                    rounded-tr-md rounded-br-md 
                    bg-white                `}>
                                <label className="bg-purple-200 p-3">
                                    {data.category === 'RECORD'
                                        ? `${data.category}:${(data as RecordType).recordTypeDeclarationId.toUpperCase()}`
                                        : data.category}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-1 bg-white border rounded border-gray-400">
                        <div className="w-6 h-4 justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-7 relative">
                                <span className="material-symbols-outlined mr-1">
                                    {getIcon(
                                        data.category === 'RECORD'
                                            ? (data as RecordType).recordTypeDeclarationId
                                            : data.category
                                    )}
                                </span>
                            </div>
                        </div>

                        {data.category === 'BOOLEAN' && (
                            <Switch size="small" position={'right'}>
                                {data.category}
                            </Switch>
                        )}

                        {data.category === 'RECORD' &&
                            (data as RecordType).recordTypeDeclarationId === 'DATE' && (
                                <DatePicker {...datepickerProps}>
                                    <DatePicker.Input
                                        {...inputProps}
                                        label="Velg dato"
                                        hideLabel={true}
                                        size="small"
                                    />
                                </DatePicker>
                            )}

                        {data.category === 'RECORD' &&
                            (data as RecordType).recordTypeDeclarationId === 'DATETIME' && (
                                <>
                                    <DatePicker {...datepickerProps}>
                                        <DatePicker.Input
                                            {...inputProps}
                                            label="Velg dato"
                                            hideLabel={true}
                                            size="small"
                                        />
                                    </DatePicker>
                                    <TextField
                                        type="time"
                                        className="mr-2"
                                        label={''}
                                        hideLabel
                                        size="small"
                                    />
                                </>
                            )}

                        {data.category === 'RECORD' &&
                            (data as RecordType).recordTypeDeclarationId === 'TIME' && (
                                <>
                                    <TextField
                                        type="time"
                                        className="mr-2"
                                        label={''}
                                        hideLabel
                                        size="small"
                                    />
                                </>
                            )}
                        {(data.category === 'STRING' ||
                            data.category === 'INTEGER' ||
                            data.category === 'DECIMAL') && (
                            <TextField
                                type={getTextFieldType(data.category)}
                                className="mr-2"
                                label={''}
                                hideLabel
                                placeholder={getPlaceholder(data.category)}
                                size="small"
                                title="Please enter a decimal number"
                                onChange={(e) => {}}
                            />
                        )}
                    </div>
                    {/* Input field based on category type, primitive og klokkeslett */}
                </div>
            </div>
        </div>
    );
};

export default VariableInlineNode;

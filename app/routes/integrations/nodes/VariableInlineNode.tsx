import { TextField } from '@navikt/ds-react';
import { DataType } from '~/types/types';

interface NodeData {
    data: DataType;
    displayName: string;
}

// interface VariableInlineNodeProps {
//     data: DataType;
// }

function getIcon(inputType: string) {
    switch (inputType) {
        case 'STRING':
            return 'text_fields';
        case 'INTEGER':
            return 'numbers';
        case 'DECIMAL':
            return 'decimal_increase';
        case 'time':
            return 'schedule';
        case 'date':
            return 'calendar_today';
        case 'datetime':
            return 'calendar_clock';
        case 'boolean':
            return 'toggle_on';
        default:
            return 'text_fields';
    }
}

function getTextFieldType(category: string) {
    switch (category) {
        case 'STRING':
            return 'text';
        case 'INTEGER':
            return 'number';
        default:
            return 'text';
    }
}

const VariableInlineNode: React.FC<NodeData> = ({ data }) => {
    console.log(data);

    return (
        <>
            <p className="text-sm">Variable Inline Node</p>
            <div className="bg-blue-200 p-2 rounded border border-gray-400">
                <div className=" flex flex-row gap-2">
                    <div className="flex">
                        <div className="flex">
                            <div
                                className={`
                    flex p-[5px] border border-gray-400 
                    rounded-tr-md rounded-br-md 
                    bg-white                `}>
                                <label className="bg-purple-200 p-3">{data.category}</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-1 bg-white border rounded border-gray-400">
                        <div className="w-6 h-4 justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-7 relative">
                                <span className="material-symbols-outlined mr-1">
                                    {getIcon(data.category)}
                                </span>
                            </div>
                        </div>
                        <TextField
                            type={getTextFieldType(data.category)}
                            className="mr-2"
                            label={''}
                            hideLabel
                            size="small"
                            title="Please enter a decimal number"
                            onChange={(e) => {}}
                        />
                    </div>
                    {/* Input field based on category type, primitive og klokkeslett */}
                </div>
            </div>
        </>
    );
};

export default VariableInlineNode;

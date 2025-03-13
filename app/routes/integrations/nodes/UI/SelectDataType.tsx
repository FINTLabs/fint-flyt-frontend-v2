import { Category } from '~/types/types';

export const SelectDataTypeOption = 'Velg DataType';
interface SelectDataTypeProps {
    defaultValue?: string;
    onSelect: (value: Category | typeof SelectDataTypeOption) => void;
}
export function SelectDataType({ defaultValue = '', onSelect }: SelectDataTypeProps) {
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
            onChange={(e) => onSelect(e.target.value as Category | typeof SelectDataTypeOption)}>
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

import { Category } from '~/types/types';
import { SelectDataType, SelectDataTypeOption } from './SelectDataType';

interface LabelProps {
    title: string;
    isEditing?: boolean;
    onClick: () => void;
    zIndex: number;
    position: number;
    onSelect: (value: Category | undefined, position: number) => void;
}
export function Label({ title, zIndex, isEditing, onClick, position, onSelect }: LabelProps) {
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
                    <label onClick={onClick} className={`${isEditing ? '' : ''}`}>
                        {title}
                    </label>
                )}
                {isEditing && (
                    <SelectDataType
                        defaultValue={title}
                        onSelect={(value) => {
                            onSelect(value === SelectDataTypeOption ? undefined : value, position);
                        }}
                    />
                )}
            </div>
        </>
    );
}

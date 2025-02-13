import { Handle, Position } from 'reactflow';
import VariableInlineNode from './VariableInlineNode';
import HandleOptions from './HandleOptions';
import HandleDisplay from './HandleDisplay';
import { DataType } from '~/types/types';

interface HandleProps {
    position: Position;
    id?: string;
    labelText: string;
    className?: string;
    dataType?: DataType;
    icon?: string;
    isArray?: boolean;
    isOptional?: boolean; // new prop
}

export default function CustomHandle({
    position = Position.Right,
    dataType,
    id = '',
    labelText = '',
    className = '',
    icon = '',
    isArray,
    isOptional,
}: HandleProps) {
    function labelPlacement() {
        if (position == Position.Right) {
            return 'flex-row';
        }
        if (position == Position.Left) {
            return 'flex-row-reverse';
        }
    }

    return (
        <div className={`flex gap-2 pb-1 items-center relative ${labelPlacement()} ${className}`}>
            <div className={`relative`}>
                <Handle
                    type={position == Position.Right ? 'source' : 'target'}
                    position={position}
                    className={
                        position == Position.Left
                            ? // ? 'absolute z-10 w-16 !bg-teal-500'
                              // : 'absolute z-10 w-16 '
                              'absolute z-10 !w-4 !h-4 !left-[-8px] !bg-orange-300 !border !border-black'
                            : 'absolute z-10 !w-4 !h-4 !left-[-8px] !bg-amber-700 !border !border-black'
                        // : 'absolute z-10 !w-4 !h-4'
                    }
                    id={id}
                    key={id}
                />
            </div>

            {/* Placeholder next to the handle */}
            {/* <div
                className={`bg-white text-nowrap z-20 justify-center flex flex-row text-xs mx-2 h-7 border rounded-2xl pl-2 px-2 mr-5 absolute ${
                    isOptional ? 'border-dashed border border-black' : null
                }`}>
                {icon && (
                    <div className="flex items-center">
                        {isArray && <span className="material-symbols-outlined">data_array</span>}
                        <span className={`material-symbols-rounded mx-1 }`}>{icon}</span>
                        <p className="text-sm">{labelText}</p>
                    </div>
                )}
            </div> */}
            <HandleDisplay
                position={position}
                data={dataType ? dataType : { category: 'STRING' }}
                displayName={labelText}
            />
        </div>
    );
}

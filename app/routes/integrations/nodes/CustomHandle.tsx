import { Connection, Handle, Position } from 'reactflow';
import VariableInlineNode from './VariableInlineNode';
import HandleOptions from './HandleOptions';
import HandleDisplay from './HandleDisplay';
import { CategoryType, DataType, ListType, ParameterizedType, RecordType } from '~/types/types';
import { getColorTheme } from './ColorThemes';

interface HandleProps {
    position: Position;
    id?: string;
    displayText: string;
    className?: string;
    dataType?: DataType;
    icon?: string;
    isArray?: boolean;
    isOptional?: boolean; // new prop
    isValidConnection?: (connection: Connection) => boolean;
}

export default function CustomHandle({
    position = Position.Right,
    dataType,
    id = '',
    displayText = '',
    className = '',
    icon = '',
    isArray,
    isOptional,
    isValidConnection,
}: HandleProps) {
    function labelPlacement() {
        if (position == Position.Right) {
            return 'flex-row';
        }
        if (position == Position.Left) {
            return 'flex-row-reverse';
        }
    }

    let typeParameterId = '';
    if (dataType?.category === CategoryType.LIST) {
        const listType = dataType as ListType;

        if (listType.elementType.category === CategoryType.PARAMETERIZED) {
            const parameterizedType = listType.elementType as ParameterizedType;
            console.log(parameterizedType.typeParameterId);
            typeParameterId = parameterizedType.typeParameterId;
        }
    }

    const colorTheme = getColorTheme();
    const handleBgColor =
        position == Position.Left
            ? `${colorTheme.InputHandleBgColor}`
            : `${colorTheme.OutputHandleBgColor}`;

    const handleDesign = `absolute z-10 !w-4 !h-4 !left-[-8px] !border !border-black`;

    const design = `${handleDesign} !${handleBgColor}`;
    console.log('2: ', handleBgColor);
    // const design = 'absolute z-10 !w-4 !h-4 !left-[-8px] !border !border-black !bg-blue-300';
    // console.log(design);
    return (
        <div className={`flex gap-2 pb-1 items-center relative ${labelPlacement()} ${className}`}>
            <div className={`relative bg-red-200`}>
                <Handle
                    type={position == Position.Right ? 'source' : 'target'}
                    position={position}
                    className={design}
                    id={id}
                    key={id}
                    isValidConnection={isValidConnection}
                />
            </div>

            <HandleDisplay
                position={position}
                category={
                    dataType
                        ? dataType.category === 'RECORD'
                            ? (dataType as RecordType).recordTypeDeclarationId
                            : dataType.category
                        : 'STRING'
                }
                displayName={displayText}
                typeParameterId={typeParameterId}
            />
        </div>
    );
}

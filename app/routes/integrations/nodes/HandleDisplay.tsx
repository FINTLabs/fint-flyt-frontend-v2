import { DataType } from '~/types/types';
import DataTypeComponent from './UI/DataType';
import { DisplayName } from './UI/DisplayName';
import { Handle, Position } from 'reactflow';
import { getIcon } from './utils';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

interface NodeData {
    displayName: string;
}

interface HandleDisplayProps {
    dataType: string;
    displayName: string;
    position: Position;
}

function HandleIcon({ icon }: { icon: string }) {
    return (
        <div className="flex items-center justify-center bg-white w-6 h-[calc(1.75rem-2px)] relative rounded-full">
            <span
                className={`material-symbols-rounded ${icon === 'text_fields' ? 'text-[1.1rem]' : 'text-[1.3rem]'} leading-none flex items-center justify-center`}
                style={{
                    lineHeight: 1,
                }}>
                {icon}
            </span>
        </div>
    );
}

const HandleDisplay: React.FC<HandleDisplayProps> = ({ position, dataType, displayName }) => {
    const icon = getIcon(dataType);

    const positionClasses = position === Position.Left ? 'mr-4' : '';
    return (
        <>
            <div
                className={`${positionClasses} flex bg-[#FFE6C1] item-center text-nowrap z-20 justify-center flex-row text-sm mx-2 h-7 border rounded-2xl pl-2 px-2 mr-2`}>
                {/* {isArray && <span className="material-symbols-outlined">data_array</span>} */}

                <HandleIcon icon={icon}></HandleIcon>
                <DisplayName displayName={displayName}></DisplayName>
            </div>
        </>
    );
};

export default HandleDisplay;

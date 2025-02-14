import { Connection, Handle, Position } from 'reactflow';
import { VariableDeclaration } from '../types/Operation';
import CustomHandle from './CustomHandle';
import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';

interface BaseNodeProps {
    title: string;
    leftHandles: VariableDeclaration[];
    rightHandles: VariableDeclaration[];
    selected: boolean;
    iconId: string;
    isValidConnection: (connection: Connection) => boolean;
}

export const BaseNode: React.FC<BaseNodeProps> = ({
    title,
    leftHandles,
    rightHandles,
    selected,
    iconId,
    isValidConnection,
}) => {
    const maxHandles =
        leftHandles.length > rightHandles.length ? leftHandles.length : rightHandles.length;

    const dynamicHeight = `${maxHandles > 2 ? maxHandles * 2 : 5}rem`;

    // const backgroundDesign = selected
    //     ? 'bg-orange-300 ring-2 ring-gray-700/40 shadow-sm shadow-gray-500'
    //     : 'bg-[#FFE6C1]';

    const tailwindOrange = 'bg-orange-300';
    const greyShade = 'bg-gray-200';
    const orange = 'bg-[#FFE6C1]';
    const greyOrange = 'bg-[#f8ecda]';
    const lightOrange = 'bg-[#fef2e0]';

    const backgroundDesign = selected
        ? `${tailwindOrange} ring-2 ring-gray-700/40 shadow-sm shadow-gray-500`
        : `${lightOrange}`;
    return (
        <div className="">
            <div className={`flex justify-center ${selected ? '' : ''}`}>
                {/* Left handles */}
                <div className="flex justify-center flex-col">
                    {leftHandles.map((handle, index) => (
                        <CustomHandle
                            key={index}
                            position={Position.Left}
                            id={handle.key}
                            displayText={handle.displayText}
                            isArray={false}
                            dataType={handle.dataType}
                            isValidConnection={isValidConnection}
                        />
                    ))}
                </div>

                <div className="relative flex flex-col items-center">
                    {/* Display text centered above the rounded box */}
                    <p className="absolute top-[-2.5rem] left-1/2 -translate-x-1/2 text-center text-xl px-2 whitespace-nowrap">
                        {title}
                    </p>

                    {/* Rounded box */}
                    <div
                        style={{ height: dynamicHeight }}
                        className={`relative ${backgroundDesign} w-20 rounded-2xl flex flex-col items-center justify-center border border-black p-2`}>
                        {renderIcon(iconId)}
                    </div>
                </div>

                {/* Right handles */}
                <div className="flex justify-center flex-col">
                    {rightHandles.map((handle, index) => (
                        <CustomHandle
                            key={index}
                            position={Position.Right}
                            id={handle.key}
                            displayText={handle.displayText}
                            isArray={false}
                            dataType={handle.dataType}
                            isValidConnection={isValidConnection}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const renderIcon = (iconId: string) => {
    if (iconId === 'ChevronRightDoubleCircleFillIcon') {
        return <ChevronRightDoubleCircleFillIcon title="a11y-title" fontSize="40px" />;
    } else {
        return <span className="material-symbols-outlined text-left text-[40px]">{iconId}</span>;
    }
};

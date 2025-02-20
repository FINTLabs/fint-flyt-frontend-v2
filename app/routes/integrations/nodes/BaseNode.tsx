import { Connection, Handle, Position } from 'reactflow';
import { VariableDeclaration } from '../types/Operation';
import CustomHandle from './CustomHandle';
import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';

interface BaseNodeProps {
    title: string;
    leftHandles?: VariableDeclaration[];
    rightHandles?: VariableDeclaration[];
    selected: boolean;
    iconId: string;
    type: string;
    isValidConnection: (connection: Connection) => boolean;
}

export const BaseNode: React.FC<BaseNodeProps> = ({
    title,
    leftHandles,
    rightHandles,
    selected,
    iconId,
    type,
    isValidConnection,
}) => {
    const maxHandles =
        !leftHandles || !rightHandles ? 0 : Math.max(leftHandles.length, rightHandles.length);

    const dynamicHeight = `${maxHandles > 2 ? maxHandles * 2 : 5}rem`;

    const designProfile = designProfiles[7];
    const backgroundDesign = selected
        ? designProfile.BackgroundColorselected
        : designProfile.BackgroundColorDefault;

    const isInnerFlow = type === 'innerflow';

    const innerFlowDesign = 'w-80 min-h-40 bg-white';
    return (
        <div className="">
            <div className={`flex justify-center ${selected ? '' : ''}`}>
                {/* Left handles */}
                <div className="flex justify-center flex-col">
                    {leftHandles?.map((handle, index) => (
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
                    <p
                        className={`absolute top-[-2.5rem] left-1/2 -translate-x-1/2 text-center text-xl px-2 whitespace-nowrap`}>
                        {title}
                    </p>

                    {/* Operation box */}
                    <div
                        style={{ height: dynamicHeight }}
                        className={`relative ${backgroundDesign} ${isInnerFlow ? innerFlowDesign : 'w-20'} rounded-2xl flex flex-col items-center justify-center border border-black p-2`}>
                        {renderIcon(iconId)}

                        {/* Innerflow custom styles */}
                        {isInnerFlow && (
                            // left panel
                            <>
                                <div
                                    style={{ height: '100%' }}
                                    className={`bg-sand w-10 absolute left-0 top-0 border-r border-black rounded-l-2xl`}></div>
                                <div
                                    style={{ height: '100%' }}
                                    className={`bg-sand w-10 absolute right-0 top-0 border-l border-black rounded-r-2xl `}></div>
                            </>
                        )}
                    </div>
                </div>

                {/* Right handles */}
                <div className="flex justify-center flex-col">
                    {rightHandles?.map((handle, index) => (
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

interface DesignProfile {
    BackgroundColorDefault: string;
    BackgroundColorselected: string;
}

export const designProfiles: Record<string, DesignProfile> = {
    1: {
        // Novari Orange Theme
        BackgroundColorDefault: 'bg-[#FFE6C1]',
        BackgroundColorselected: 'bg-orange-300 ring-2 ring-gray-700/40 shadow-sm shadow-gray-500',
    },
    2: {
        BackgroundColorDefault: 'bg-gray-200',
        BackgroundColorselected: 'bg-blue-200 ring-2 ring-blue-700/40 shadow-sm shadow-blue-500',
    },
    3: {
        // Light Orange
        BackgroundColorDefault: 'bg-[#fef2e0]',
        BackgroundColorselected:
            'bg-[#ffb432] ring-2 ring-emerald-700/40 shadow-sm shadow-emerald-500',
    },
    4: {
        // Tailwind Orange Theme
        BackgroundColorDefault: 'bg-[#f8ecda]',
        BackgroundColorselected: 'bg-orange-400 ring-2 ring-gray-700/40 shadow-sm shadow-gray-500',
    },
    5: {
        // Rose Theme
        BackgroundColorDefault: 'bg-teal-300',
        BackgroundColorselected: 'bg-rose-300 ring-2 ring-rose-700/40 shadow-sm shadow-rose-500',
    },
    6: {
        BackgroundColorDefault: 'bg-red-300',
        BackgroundColorselected: 'bg-red-400 ring-2 ring-red-700/40 shadow-sm shadow-red-500',
    },
    7: {
        BackgroundColorDefault: 'bg-blue-300',
        BackgroundColorselected: 'bg-blue-500 ring-2 ring-blue-700/40 shadow-sm shadow-blue-500',
    },
};

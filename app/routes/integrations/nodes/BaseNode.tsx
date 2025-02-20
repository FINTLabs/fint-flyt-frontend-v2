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

    const colorPalette = ColorThemes[1];
    const isInnerFlow = type === 'innerflow';

    const operationBgColor = selected
        ? colorPalette.OperationBgColorselected
        : colorPalette.OperationBgColorDefault;
    const operationDesign = `${operationBgColor} w-20`;

    const innerFlowBgColor = selected
        ? colorPalette.InnerFlowBgColorSelected
        : colorPalette.InnerFlowBgColorDefault;
    const innerFlowDesign = `w-80 min-h-40 ${innerFlowBgColor}`;

    const sidebarColor = selected
        ? colorPalette.InnerFlowBgColorSideBarsSelected
        : colorPalette.InnerFlowBgColorSideBarsDefault;
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
                        className={`relative ${isInnerFlow ? innerFlowDesign : operationDesign} rounded-2xl flex flex-col items-center justify-center border border-black p-2`}>
                        {renderIcon(iconId, colorPalette.iconColor, colorPalette.iconStrokeColor)}

                        {/* Innerflow custom styles */}
                        {isInnerFlow && (
                            // side bars
                            <>
                                <div
                                    style={{ height: '100%' }}
                                    className={`${sidebarColor} w-10 absolute left-0 top-0 border-r border-black rounded-l-2xl`}></div>
                                <div
                                    style={{ height: '100%' }}
                                    className={`${sidebarColor} w-10 absolute right-0 top-0 border-l border-black rounded-r-2xl`}></div>
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

const renderIcon = (iconId: string, iconColor: string, iconStrokeColor: string) => {
    const outlineWidth = '0.5px';

    if (iconId === 'ChevronRightDoubleCircleFillIcon') {
        return <ChevronRightDoubleCircleFillIcon title="a11y-title" fontSize="40px" />;
    } else {
        return (
            <span
                className={`material-symbols-outlined text-left text-[40px] ${iconColor}`}
                style={{
                    textShadow: `
                    -${outlineWidth} -${outlineWidth} 0 ${iconStrokeColor},
                    ${outlineWidth} -${outlineWidth} 0 ${iconStrokeColor},
                    -${outlineWidth} ${outlineWidth} 0 ${iconStrokeColor},
                    ${outlineWidth} ${outlineWidth} 0 ${iconStrokeColor}
                `,
                }}>
                {iconId}
            </span>
        );
    }
};

interface ColorProfile {
    OperationBgColorDefault: string;
    OperationBgColorselected: string;
    InnerFlowBgColorDefault: string;
    InnerFlowBgColorSelected: string;
    InnerFlowBgColorSideBarsDefault: string;
    InnerFlowBgColorSideBarsSelected: string;
    iconColor: string;
    iconStrokeColor: string;
}

export const ColorThemes: Record<string, ColorProfile> = {
    1: {
        // Novari Orange Theme
        OperationBgColorDefault: 'bg-[#FFE6C1]',
        OperationBgColorselected: 'bg-orange-300 ring-2 ring-gray-700/40 shadow-sm shadow-gray-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-sand',
        InnerFlowBgColorSideBarsSelected: 'bg-sand-dark',
        iconColor: 'text-[#b95b1b]',
        iconStrokeColor: 'stroke-orange-900',
    },
    2: {
        OperationBgColorDefault: 'bg-gray-200',
        OperationBgColorselected: 'bg-blue-200 ring-2 ring-blue-700/40 shadow-sm shadow-blue-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-blue-100',
        InnerFlowBgColorSideBarsSelected: 'bg-blue-200',
        iconColor: 'text-blue-600',
        iconStrokeColor: 'stroke-blue-900',
    },
    3: {
        // Light Orange
        OperationBgColorDefault: 'bg-[#fef2e0]',
        OperationBgColorselected:
            'bg-[#ffb432] ring-2 ring-emerald-700/40 shadow-sm shadow-emerald-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-[#fff8e8]',
        InnerFlowBgColorSideBarsSelected: 'bg-[#ffefcc]',
        iconColor: 'text-[#ff9900]',
        iconStrokeColor: 'stroke-[#cc7a00]',
    },
    4: {
        // Tailwind Orange Theme
        OperationBgColorDefault: 'bg-[#f8ecda]',
        OperationBgColorselected: 'bg-orange-400 ring-2 ring-gray-700/40 shadow-sm shadow-gray-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-orange-100',
        InnerFlowBgColorSideBarsSelected: 'bg-orange-200',
        iconColor: 'text-orange-500',
        iconStrokeColor: 'stroke-orange-800',
    },
    5: {
        // Rose Theme
        OperationBgColorDefault: 'bg-teal-300',
        OperationBgColorselected: 'bg-rose-300 ring-2 ring-rose-700/40 shadow-sm shadow-rose-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-teal-200',
        InnerFlowBgColorSideBarsSelected: 'bg-teal-300',
        iconColor: 'text-teal-600',
        iconStrokeColor: 'stroke-teal-900',
    },
    6: {
        OperationBgColorDefault: 'bg-red-300',
        OperationBgColorselected: 'bg-red-400 ring-2 ring-red-700/40 shadow-sm shadow-red-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-red-200',
        InnerFlowBgColorSideBarsSelected: 'bg-red-300',
        iconColor: 'text-red-600',
        iconStrokeColor: 'stroke-red-900',
    },
    7: {
        OperationBgColorDefault: 'bg-blue-300',
        OperationBgColorselected: 'bg-blue-500 ring-2 ring-blue-700/40 shadow-sm shadow-blue-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-blue-200',
        InnerFlowBgColorSideBarsSelected: 'bg-blue-300',
        iconColor: 'text-blue-600',
        iconStrokeColor: 'stroke-blue-900',
    },
};

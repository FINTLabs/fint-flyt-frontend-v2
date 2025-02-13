import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';
import React from 'react';
import { Position } from 'reactflow';
import nodeConfig from '~/routes/integrations/nodes/config';
import CustomHandle from './CustomHandle';
import { OperationDeclaration } from '../types/Operation';

interface Props {
    id: string;
    selected: boolean;
    type: string;
    data: OperationDeclaration;
}

const OperationNode: React.FC<Props> = ({ data, type, selected }) => {
    console.log('OperationNode');
    console.log(data);
    console.log(type);

    const renderIcon = () => {
        if (data.iconId === 'ChevronRightDoubleCircleFillIcon') {
            return <ChevronRightDoubleCircleFillIcon title="a11y-title" fontSize="40px" />;
        } else {
            return (
                <span className="material-symbols-outlined text-left text-[40px]">
                    {data.iconId}
                </span>
            );
        }
    };

    const backgroundColor = 'bg-sky-200';
    const leftHandles = data.operationVariables.inputVariables.sort((a, b) => a.order - b.order);
    const rightHandles = data.operationVariables.outputVariables.sort((a, b) => a.order - b.order);
    const maxHandles = leftHandles.length >= rightHandles.length ? leftHandles : rightHandles;

    const dynamicHeight = maxHandles.length > 2 ? maxHandles.length * 2 : 5;

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
                        />
                    ))}
                </div>

                <div className="relative flex flex-col items-center">
                    {/* Display text centered above the rounded box */}
                    <p className="absolute top-[-2.5rem] left-1/2 -translate-x-1/2 text-center text-xl px-2 whitespace-nowrap">
                        {data.displayText}
                    </p>

                    {/* Rounded box */}
                    <div
                        className={`relative w-20 rounded-2xl flex flex-col items-center justify-center border border-black p-2 h-[${dynamicHeight}rem]`}>
                        {renderIcon()}
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OperationNode;

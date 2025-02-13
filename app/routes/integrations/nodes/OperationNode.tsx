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

    const leftHandles = data.operationVariables.inputVariables;
    const rightHandles = data.operationVariables.outputVariables;

    return (
        <div className="">
            {/* <p className="text-center bg-cl">{data.displayText}</p> */}
            <div className={`flex justify-center ${selected ? '' : ''}`}>
                {/* Left handles */}
                <div className="flex justify-center flex-col">
                    {leftHandles.map((v, index) => (
                        <CustomHandle
                            key={index}
                            position={Position.Left}
                            id={v.key}
                            displayText={v.displayText}
                            isArray={false}
                        />
                    ))}
                </div>

                <div className="relative flex flex-col items-center">
                    {/* Display text centered above the rounded box */}
                    <p className="absolute top-[-1.5rem] left-1/2 -translate-x-1/2 text-center px-2 whitespace-nowrap">
                        {data.displayText}
                    </p>

                    {/* Rounded box */}
                    <div className="relative w-20 rounded-2xl flex items-center justify-center border border-black p-4">
                        {renderIcon()}
                    </div>
                </div>

                {/* Right handles */}
                <div className="flex justify-center flex-col">
                    {rightHandles.map((v, index) => (
                        <CustomHandle
                            key={index}
                            position={Position.Right}
                            id={v.key}
                            displayText={v.displayText}
                            isArray={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OperationNode;

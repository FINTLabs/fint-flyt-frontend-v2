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
    // const handles: HandleConfig[] = handlesConfig[data.inputType] || null;
    // const handlesRight: HandleConfig[] = handleConfigsRight[data.inputType] || null;
    const config = nodeConfig[type] || {};

    console.log('config', config);
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

    return (
        <div className="">
            <p className="text-center">{data.displayText}</p>
            <div className={`flex justify-center p-3 ${selected ? '' : ''}`}>
                {/* Left handles */}
                <div className="flex justify-center flex-col">
                    {data.operationVariables.inputVariables.map((v, index) => (
                        <CustomHandle
                            key={index}
                            position={Position.Left}
                            id={v.key}
                            labelText={v.displayText}
                            isArray={false}
                        />
                    ))}
                </div>
                {/*<div className="absolute z-10 bottom-full mb-2 w-[100px] text-center">*/}
                {/*    Output Node*/}
                {/*</div>*/}

                <div
                    className={`relative $ﬁs{backgroundColor} rounded-2xl flex items-center justify-center border border-black p-4`}>
                    {renderIcon()}
                </div>

                {/* Right handles */}
                {/* {config.customHandles?.right.map((handle, index) => (
                    <CustomHandle
                        key={index}
                        position={Position.Right}
                        id={handle.id}
                        icon={handle.icon}
                        labelText={handle.labelText}
                        isArray={handle.isArray}
                        isOptional={handle.isOptional}
                    />
                ))} */}
            </div>
        </div>
    );
};

export default OperationNode;

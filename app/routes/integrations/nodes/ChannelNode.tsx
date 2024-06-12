import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';
import React from "react";
import {Position} from "reactflow";
import nodeConfig from '../handles/config';
import CustomHandle from '../handles/customHandle';

interface CustomNodeProps {
    id: string;
    selected: boolean;
    data: {
        nodeType: string;
        label: string;
        inputType: string;
        icon: string;
        hasToolbar?: boolean;
    };
}

const ChannelNode: React.FC<CustomNodeProps> = ({ data, selected }) => {
    // const handles: HandleConfig[] = handlesConfig[data.inputType] || null;
    // const handlesRight: HandleConfig[] = handleConfigsRight[data.inputType] || null;
    const config = nodeConfig[data.inputType] || {};

    const renderIcon = () => {
        if (data.icon === 'ChevronRightDoubleCircleFillIcon') {
            return <ChevronRightDoubleCircleFillIcon title="a11y-title" fontSize="40px" />;
        } else {
            return (
                <span className="material-symbols-outlined text-left text-[40px]">
          {data.icon}
        </span>
            );
        }
    };

    const backgroundColor = data.inputType === 'blueprint' ? 'bg-sky-200' : 'bg-[#FFE6C1]';

    return (
        <div className={`flex justify-center ${selected ? 'border-black border' : ''}`}>
            {config.customHandles?.left.map((handle, index) => (
                <CustomHandle
                    key={index}
                    position={Position.Left}
                    id={handle.id}
                    icon={handle.icon}
                    labelText={handle.labelText}
                    isArray={handle.isArray}
                    isOptional={handle.isOptional}
                />
            ))}
            {/*<div className="absolute z-10 bottom-full mb-2 w-[100px] text-center">*/}
            {/*    Output Node*/}
            {/*</div>*/}

            <div className={`relative ${backgroundColor} rounded-2xl flex items-center justify-center border border-black p-4`}>
                {renderIcon()}
            </div>

            {config.customHandles?.right.map((handle, index) => (
                <CustomHandle
                    key={index}
                    position={Position.Right}
                    id={handle.id}
                    icon={handle.icon}
                    labelText={handle.labelText}
                    isArray={handle.isArray}
                    isOptional={handle.isOptional}
                />
            ))}
        </div>
    );
}

export default ChannelNode;

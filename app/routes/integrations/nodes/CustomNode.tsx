import { Position } from 'reactflow';
import React from 'react';
import CustomHandle from './CustomHandle';
import nodeConfig from '~/routes/integrations/nodes/config';

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

//TODO: use SVG and icons needs to be updated

const CustomNode: React.FC<CustomNodeProps> = ({ data, selected }) => {
    const config = nodeConfig[data.inputType] || {};

    return (
        <div className={`flex justify-center ${selected ? 'border-black border' : ''}`}>
            <div className="flex flex-row items-center">
                <div className="flex flex-col h-[50%] justify-between">
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
                </div>
            </div>

            <div className="flex flex-row items-center">
                <div className="w-16 flex flex-col bg-zinc-100 rounded-xl border border-black h-20">
                    <span className="material-symbols-outlined text-left">{config.mainIcon}</span>
                    <span className="material-symbols-outlined text-3xl text-center">
                        {data.icon}
                    </span>
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
        </div>
    );
};

export default CustomNode;

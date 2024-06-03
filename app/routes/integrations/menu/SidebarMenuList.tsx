import React from 'react';
import { Box, HStack } from "@navikt/ds-react";
import { menuConfigs } from './config';

interface MathNodeListProps {
  configKey: string;
}

const MathNodelist: React.FC<MathNodeListProps> = ({ configKey }) => {
    const nodesConfig = menuConfigs[configKey];

    const onDragStart = (event: React.DragEvent<HTMLSpanElement>, nodeType: string, inputType: string, label:string, icon:string) => {
        event.dataTransfer.setData('application/node-type', nodeType);
        const data = { inputType,label,icon };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <HStack gap="2" align="start">
            {nodesConfig.map((tag, index) => (
                <Box
                    key={index}
                    onDragStart={(event) => onDragStart(event, tag.nodeType, tag.inputType, tag.label, tag.icon)}
                    draggable
                    className={"w-40 flex items-center rounded-lg bg-gray-200"}
                    as={"div"}
                    background="surface-subtle"
                    padding="1"
                    borderRadius="large"
                >
                    <span className="w-1/4">
                        <span className="material-symbols-outlined">
                            {tag.icon}
                        </span>
                    </span>
                    <span className="ml-1">{tag.label}</span>
                </Box>
            ))}
        </HStack>
    );
};

export default MathNodelist;

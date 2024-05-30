import React from 'react';
import { Box, HStack } from "@navikt/ds-react";

const SubFlowNodesList: React.FunctionComponent = () => {

    const onDragStart = (event: React.DragEvent<HTMLSpanElement>, nodeType: string, inputType: string) => {
        event.dataTransfer.setData('application/node-type', nodeType);
        const data = { inputType };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
        event.dataTransfer.effectAllowed = 'move';
    };

    const nodes = [
        { nodeType: "subflow", inputType: "subflow-if-else", icon: "fact_check", label: "Foreach" },
        { nodeType: "subflow", inputType: "subflow-map", icon: "checklist", label: "Map" },
        { nodeType: "subflow", inputType: "subflow-filter", icon: "filter_alt", label: "Filter" },
        { nodeType: "subflow", inputType: "subflow-reduce", icon: "arrow_and_edge", label: "Reduce" },
        { nodeType: "subflow", inputType: "subflow-find-first", icon: "frame_inspect", label: "FindFirst" }
    ];

    return (
        <HStack gap="2" align="start">
            {nodes.map((node, index) => (
                <Box
                    key={index}
                    onDragStart={(event) => onDragStart(event, node.nodeType, node.inputType)}
                    draggable
                    className={"w-40 flex items-center rounded-lg bg-gray-200"}
                    as={"div"}
                    background="surface-subtle"
                    padding="1"
                    borderRadius="large"
                >
                    <span className="material-symbols-outlined mr-1">{node.icon}</span>
                    <span className="ml-1">{node.label}</span>
                </Box>
            ))}
        </HStack>
    );
}

export default SubFlowNodesList;

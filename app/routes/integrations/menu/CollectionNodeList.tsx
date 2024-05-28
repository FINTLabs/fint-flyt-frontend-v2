import React from 'react';
import {Box, HStack} from "@navikt/ds-react";

const SubFlowNodesList: React.FunctionComponent = () => {

    const onDragStart = (event: React.DragEvent<HTMLSpanElement>, nodeType: string, inputType: string, leftInput: number, rightInput: number ) => {
        event.dataTransfer.setData('application/node-type', nodeType);
        const data = { inputType, leftInput, rightInput };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <HStack gap="2" align="start">
            <Box
                onDragStart={(event) => onDragStart(event, "subflow", "subflow-if-else", 1, 0)}
                draggable
                className={"w-40 flex items-center rounded-lg bg-gray-200"}
                as={"div"}
                background="surface-subtle"
                padding="1"
                borderRadius="large"
            >
                <span className="material-symbols-outlined mr-1">fact_check</span>
                <span className="ml-1">Foreach</span>
            </Box>

            <Box
                onDragStart={(event) => onDragStart(event, "subflow", "subflow-map", 1, 1)}
                draggable
                className={"w-40 flex items-center rounded-lg bg-gray-200"}
                as={"div"}
                background="surface-subtle"
                padding="1"
                borderRadius="large"
            >
                <span className="material-symbols-outlined mr-1">checklist</span>
                <span className="ml-1">Map </span>
            </Box>

            <Box
                onDragStart={(event) => onDragStart(event, "subflow", "subflow-reduce", 2, 1)}
                draggable
                className={"w-40 flex items-center rounded-lg bg-gray-200"}
                as={"div"}
                background="surface-subtle"
                padding="1"
                borderRadius="large"
            >
                <span className="material-symbols-outlined mr-1">arrow_and_edge</span>
                <span className="ml-1">Reduce </span>
            </Box>

        </HStack>



    );
}

export default SubFlowNodesList;
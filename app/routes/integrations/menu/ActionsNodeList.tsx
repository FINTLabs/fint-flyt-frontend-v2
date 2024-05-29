import React from 'react';
import {Box, HStack} from "@navikt/ds-react";
import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';
const ActionsNodeList: React.FunctionComponent = () => {
    const onDragStart = (event: React.DragEvent<HTMLSpanElement>, nodeType: string, inputType: string ) => {
        event.dataTransfer.setData('application/node-type', nodeType);
        const data = { inputType };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
        event.dataTransfer.effectAllowed = 'move';
        
    };

    return (
        <HStack gap="2" align="start">

            <Box
                onDragStart={(event) => onDragStart(event, "inputNode", "inputNode")}
                draggable
                className={"w-40 flex items-center rounded-lg bg-gray-200"}
                as={"div"}
                background="surface-subtle"
                padding="1"
                borderRadius="large"
            >
                <span className="w-1/4">{<img src="../images/input.svg" className="h-[20px]" alt="input"/>}</span>
                <span className="ml-[6px]">In Channel</span>
            </Box>

            <Box
                onDragStart={(event) => onDragStart(event, "outputNode", "outputNode")}
                draggable
                className={"w-40 flex items-center rounded-lg bg-gray-200"}
                as={"div"}
                background="surface-subtle"
                padding="1"
                borderRadius="large"
            >
                <ChevronRightDoubleCircleFillIcon title="a11y-title" fontSize="1.5rem" className="h-2/4 mr-4" />
                {/* <span className="w-1/4">{<img src="../images/input.svg" className="h-[20px]" alt="input"/>}</span> */}
                <span className="ml-1">Out Channel</span>
            </Box>
            <Box
                onDragStart={(event) => onDragStart(event, "openObject", "openObject")}
                draggable
                className={"w-40 flex items-center rounded-lg bg-gray-200"}
                as={"div"}
                background="surface-subtle"
                padding="1"
                borderRadius="large"
            >
                <span className="w-1/4">{<img src="../images/openObject.svg" className="h-[20px]" alt="input"/>}</span>
                <span className="ml-[6px]">Open Object</span>
            </Box>
        </HStack>



    );
}

export default ActionsNodeList;
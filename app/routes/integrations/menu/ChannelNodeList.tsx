import React from 'react';
import {Box, HStack, Tag} from "@navikt/ds-react";
const ChannelNodeList: React.FunctionComponent = () => {
    const onDragStart = (event: React.DragEvent<HTMLSpanElement>, nodeType: string, inputType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('application/input-type', inputType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <HStack gap="2" align="start">


            <Box
                onDragStart={(event) => onDragStart(event, "channel", "channel")}
                draggable
                className={"w-40 flex items-center rounded-lg bg-gray-200"}
                as={"div"}
                background="surface-subtle"
                padding="1"
                borderRadius="large"
            >
                <span className="w-1/4">{<img src="../images/input.svg" className="h-[20px]" alt="input"/>}</span>
                <span className="ml-1">Input A</span>
            </Box>

            <HStack gap="2" align="start">
                    <Box
                        onDragStart={(event) => onDragStart(event, "channel", "channel")}
                        draggable
                        className={"w-40 flex items-center rounded-lg bg-gray-200"}
                        as={"div"}
                        background="surface-subtle"
                        padding="1"
                        borderRadius="large"
                    >
                        <span className="w-1/4">{<img src="../images/input.svg" className="h-[20px]" alt="input"/>}</span>
                        <span className="ml-1">input B</span>
                    </Box>
            </HStack>
        </HStack>



    );
}

export default ChannelNodeList;
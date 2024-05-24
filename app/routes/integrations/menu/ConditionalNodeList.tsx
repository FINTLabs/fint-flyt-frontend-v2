import React from 'react';
import {Box, HStack, Tag} from "@navikt/ds-react";
import {ArrowsSquarepathIcon, ExpandIcon} from "@navikt/aksel-icons";

const SubFlowNodesList: React.FunctionComponent = () => {

    const onDragStart = (event: React.DragEvent<HTMLSpanElement>, nodeType: string, inputType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('application/input-type', inputType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <HStack gap="2" align="start">
            <Box
                onDragStart={(event) => onDragStart(event, "subflow", "subflow-if-else")}
                draggable
                className={"w-40 flex items-center rounded-lg bg-gray-200"}
                as={"div"}
                background="surface-subtle"
                padding="1"
                borderRadius="large"
            >
                <span className="w-1/4"><ExpandIcon title="a11y-title" fontSize="1.5rem" /></span>
                <span className="ml-1">If / Else </span>
            </Box>

            <Box
                onDragStart={(event) => onDragStart(event, "subflow", "subflow-map")}
                draggable
                className={"w-40 flex items-center rounded-lg bg-gray-200"}
                as={"div"}
                background="surface-subtle"
                padding="1"
                borderRadius="large"
            >
                <span className="w-1/4"><ArrowsSquarepathIcon title="a11y-title" fontSize="1.5rem" /></span>
                <span className="ml-1">Map </span>
            </Box>

        </HStack>



    );
}

export default SubFlowNodesList;
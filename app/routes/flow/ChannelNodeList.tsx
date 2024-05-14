import React from 'react';
import styles from './style.module.css';
import {Box, HStack, Tag} from "@navikt/ds-react";
import {ChevronRightCircleIcon} from "@navikt/aksel-icons";
import {da} from "date-fns/locale";

function ChannelNodeList ({data}) {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
            <HStack gap="2" align="start">

                    <Tag
                        variant="neutral-moderate"
                        icon={<ChevronRightCircleIcon aria-hidden />}
                        onDragStart={(event) => onDragStart(event, 'customInput')}
                        draggable
                    >
                        A Input Node
                    </Tag>

                <Tag
                    variant="neutral-moderate"
                    icon={<ChevronRightCircleIcon aria-hidden />}
                    onDragStart={(event) => onDragStart(event, 'customNew' )}
                    draggable
                >
                    Hello World
                </Tag>
            </HStack>



    );
}

export default ChannelNodeList
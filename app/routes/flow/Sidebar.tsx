import React from 'react';
import styles from './style.module.css';
import {Box, HStack, Tag} from "@navikt/ds-react";
import {ChevronRightCircleIcon} from "@navikt/aksel-icons";

export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (

        <aside>
            <div className={styles.description}>You can drag these nodes to the panel .</div>
            <HStack gap="2" align="start">
                <Box
                    background="surface-subtle"
                    borderColor="border-alt-3"
                    padding="4"
                    borderWidth="2"
                    borderRadius="xlarge"
                >
                    <Tag
                        variant="neutral-moderate"
                        icon={<ChevronRightCircleIcon aria-hidden />}
                        onDragStart={(event) => onDragStart(event, 'customInput')}
                        draggable
                    >
                        A Input Node
                    </Tag>
                </Box>

                <Box
                    background="surface-subtle"
                    borderColor="border-alt-3"
                    padding="4"
                    borderWidth="2"
                    borderRadius="xlarge"
                >
                    <div className={`${styles.dndnode} ${styles.input}`}
                         onDragStart={(event) => onDragStart(event, 'test')}
                         draggable>
                        Input Node
                    </div>
                    <div className={`${styles.dndnode}`} onDragStart={(event) => onDragStart(event, 'customNodeNew')}
                         draggable>
                        Default Node
                    </div>
                    <div className={`${styles.dndnode} ${styles.output}`}
                         onDragStart={(event) => onDragStart(event, 'output')}
                         draggable>
                        Output Node
                    </div>
                </Box>
            </HStack>


        </aside>
    );
};

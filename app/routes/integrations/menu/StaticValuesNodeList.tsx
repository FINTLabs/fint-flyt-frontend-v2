import React from 'react';
import { Box, HStack } from "@navikt/ds-react";

const StaticValueNodelist: React.FC = () => {
    const tags = [
        { nodeType: 'static', inputType: 'text', label: 'String', icon:'text_fields' },
        { nodeType: 'static', inputType: 'number', label: 'Number', icon:'numbers' },
        { nodeType: 'static', inputType: 'decimal', label: 'Decimal', icon:'decimal_increase' },
        { nodeType: 'static', inputType: 'boolean', label: 'Boolean', icon:'toggle_on' },
        { nodeType: 'static', inputType: 'time', label: 'Time', icon:'schedule' },
        { nodeType: 'static', inputType: 'date', label: 'Date', icon:'calendar_today' },
        { nodeType: 'static', inputType: 'datetime', label: 'Date+Time', icon:'calendar_clock' },
    ];

    const onDragStart = (event: React.DragEvent<HTMLSpanElement>, nodeType: string, inputType: string) => {
        event.dataTransfer.setData('application/node-type', nodeType);
        const data = { inputType };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <HStack gap="2" align="start">
            {tags.map((tag, index) => (
                <Box
                    key={index}
                    onDragStart={(event) => onDragStart(event, tag.nodeType, tag.inputType)}
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

export default StaticValueNodelist;

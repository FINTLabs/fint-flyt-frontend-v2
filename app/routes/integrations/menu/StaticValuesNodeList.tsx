import React from 'react';
import { Box, HStack } from "@navikt/ds-react";
import { FileTextIcon, NumberListIcon, EnvelopeOpenIcon, ClockIcon } from '@navikt/aksel-icons';
import { CalendarIcon } from '@navikt/aksel-icons';

interface NodeData {
    inputType: "number" | "email" | "password" | "tel" | "text" | "decimal" | "time" | "date";
}

interface StaticValueNodeProps {
    data: NodeData;
}

const getIcon = (inputType: string): JSX.Element => {
    const iconProps = { title: "a11y-title", fontSize: "1.5rem" };
    switch (inputType) {
        case 'number':
            return <NumberListIcon {...iconProps}/>;
        case 'decimal':
            return <NumberListIcon {...iconProps}/>;
        case 'time':
            return <ClockIcon {...iconProps}/>;
        case 'date':
            return <CalendarIcon {...iconProps}/>;
        default:
            return <FileTextIcon {...iconProps}/>;
    }
};

const StaticValueNodelist: React.FC = () => {
    const tags = [
        { nodeType: 'static', inputType: 'text', label: 'String', icon:'text_fields' },
        { nodeType: 'static', inputType: 'number', label: 'Number', icon:'numbers' },
        { nodeType: 'static', inputType: 'decimal', label: 'Decimal', icon:'decimal_increase' },
        { nodeType: 'static', inputType: 'time', label: 'Time', icon:'schedule' },
        { nodeType: 'static', inputType: 'date', label: 'Date', icon:'calendar_today' },
        { nodeType: 'static', inputType: 'datetime', label: 'Date+Time', icon:'calendar_clock' },
    ];

    const onDragStart = (event: React.DragEvent<HTMLSpanElement>, nodeType: string, inputType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('application/input-type', inputType);
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

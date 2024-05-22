import React from 'react';
import {Box, HStack, Tag} from "@navikt/ds-react";
import { FileTextIcon, NumberListIcon, EnvelopeOpenIcon, ClockIcon } from '@navikt/aksel-icons';

const StaticValueNodelist: React.FunctionComponent = () => {

    const tags = [
        { nodeType: 'static', inputType: 'text', label: 'String' },
        { nodeType: 'static', inputType: 'number', label: 'Number' },
        { nodeType: 'static', inputType: 'decimal', label: 'Decimal' },
        { nodeType: 'static', inputType: 'time', label: 'Time' },
        { nodeType: 'static', inputType: 'date', label: 'Date' },
        { nodeType: 'static', inputType: 'date', label: 'Date+Time' },
    ];

    const getIcon = (inputType: string) => {
        switch (inputType) {
            case 'number':
            case 'decimal':
                return <NumberListIcon title="a11y-title" fontSize="1.5rem" />;
            case 'email':
                return <EnvelopeOpenIcon title="a11y-title" fontSize="1.5rem" />;
            case 'time':
                return <ClockIcon title="a11y-title" fontSize="1.5rem" />;
            default:
                return <FileTextIcon title="a11y-title" fontSize="1.5rem" />;
        }
    }
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
                <span className="w-1/4">{getIcon(tag.inputType)}</span>
                <span className="ml-1">{tag.label}</span>
            </Box>
        ))}
    </HStack>
);
}

export default StaticValueNodelist;
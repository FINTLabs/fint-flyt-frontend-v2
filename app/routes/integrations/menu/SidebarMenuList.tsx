import React from 'react';
import { Box, HStack } from "@navikt/ds-react";
import {MenuConfig, menuConfigs} from './config';
import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';

interface MathNodeListProps {
  configKey: string;
}

const MathNodelist: React.FC<MathNodeListProps> = ({ configKey }) => {
    const menuConfig = menuConfigs[configKey];

    const onDragStart = (event: React.DragEvent<HTMLSpanElement>, menuItem:MenuConfig) => {
        event.dataTransfer.setData('application/node-type', menuItem.nodeType);
        // const data = { inputType,label,icon };
        const data = { ...menuItem };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
        event.dataTransfer.effectAllowed = 'move';
    };

    const renderIcon = (icon:string) => {
        if (icon === 'ChevronRightDoubleCircleFillIcon') {
            return <ChevronRightDoubleCircleFillIcon title="a11y-title" fontSize="25px" />;
        } else {
            return (
                <span className="material-symbols-outlined text-left ">
          {icon}
        </span>
            );
        }
    };

    return (
        <HStack gap="2" align="start">
            {menuConfig.map((menuItem, index) => (
                <Box
                    key={index}
                    onDragStart={(event) => onDragStart(event, menuItem)}
                    draggable
                    className={"w-40 flex items-center rounded-lg bg-gray-200"}
                    as={"div"}
                    background="surface-subtle"
                    padding="1"
                    borderRadius="large"
                >
                    <span className="w-1/4">
                        {renderIcon(menuItem.icon)}
                    </span>
                    <span className="ml-1">{menuItem.label}</span>
                </Box>
            ))}
        </HStack>
    );
};

export default MathNodelist;

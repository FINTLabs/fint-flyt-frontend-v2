import React from 'react';
import { Box, HStack, VStack, Dropdown } from "@navikt/ds-react";
import {MenuConfig, menuConfigs} from './config';

interface MathNodeListProps {
  configKey: string;
  isVerticalStack?: boolean;
}

const TopMenuList: React.FC<MathNodeListProps> = ({ configKey, isVerticalStack = false }) => {
    const menuConfig = menuConfigs[configKey];

    const onDragStart = (event: React.DragEvent<HTMLSpanElement>, menuItem:MenuConfig) => {
        event.dataTransfer.setData('application/node-type', menuItem.nodeType);
        // const data = { inputType,label,icon };
        const data = { ...menuItem };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
        event.dataTransfer.effectAllowed = 'move';
    };

    const CustomimzableStack = ({children}: {children: React.ReactNode }) => {
        return isVerticalStack ? <VStack gap="2" align="start">{children}</VStack> : <HStack gap="2" align="start">{children}</HStack>
    }
    return (

        <CustomimzableStack>
            {menuConfig.map((menuItem, index) => (
                  <div className={"flex items-center rounded-lg hover:rounded-lg"}>
               <Dropdown.Menu.List.Item as="div">
                <Box
                    key={index}
                    onDragStart={(event) => onDragStart(event, menuItem)}
                    draggable
                    as={"div"}
                    borderRadius="large"
                    className={"w-60 flex items-center my-0.5"}
                >
                  
                    <span className="flex items-center pr-2">
                        <span className="material-symbols-outlined">
                            {menuItem.icon}
                        </span>
                    </span>
                    <span className="">{menuItem.label}</span>
                </Box>

                </Dropdown.Menu.List.Item>
                </div>

            ))}
        </CustomimzableStack>
    );
};

export default TopMenuList;

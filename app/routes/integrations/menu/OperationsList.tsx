import React from 'react';
import { Box, Dropdown, VStack } from '@navikt/ds-react';
import { MenuConfig, menuConfigs } from './dataTypeConfig';
import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';
import { DataType } from '~/types/types';
import { OperationDeclaration } from '../types/Operation';

interface Props {
    operationDeclarations: OperationDeclaration[];
    onClickHandler: (nodeType: string, data: any) => void;
}

const OperationsList: React.FC<Props> = ({ operationDeclarations, onClickHandler }) => {
    return (
        <VStack gap="2" align="start">
            {operationDeclarations.map((od, index) => {
                // const dataTypeConfig = menuConfigs.find(
                //     (config) => dataType.category.toLocaleLowerCase() === config.categoryType
                // );

                // for each operation find out which Node we need to drop
                // type:  channel

                const icon = od.iconId;
                const type = 'operation';
                // {
                //     "nodeType": "channel",
                //     "inputType": "input",
                //     "icon": "ChevronRightDoubleCircleFillIcon",
                //     "label": "Input"
                // }

                return (
                    <Dropdown.Menu.List.Item key={index} as="div">
                        <Box
                            key={index}
                            // onDragStart={(event) => onDragStart(event, menuItem)}
                            onClick={() => onClickHandler('operation', od)}
                            draggable
                            as={'div'}
                            borderRadius="large"
                            className={'w-60 flex items-center my-0.5'}>
                            {/* <div className="flex w-8 items-center">
                                <span className="material-symbols-outlined">{icon}</span>
                            </div> */}
                            <div className="">{od.displayText}</div>
                        </Box>
                    </Dropdown.Menu.List.Item>
                );
            })}
        </VStack>
    );
};

export default OperationsList;

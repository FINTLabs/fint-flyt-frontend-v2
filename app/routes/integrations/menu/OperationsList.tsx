import React from 'react';
import { Box, Dropdown, VStack } from '@navikt/ds-react';
import { MenuConfig, menuConfigs } from './dataTypeConfig';
import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';
import { DataType } from '~/types/types';
import { OperationDeclaration } from '../types/Operation';

interface Props {
    operationDeclarations: OperationDeclaration[];
    onClickHandler: (type: string, data: any) => void;
}

const OperationsList: React.FC<Props> = ({ operationDeclarations, onClickHandler }) => {
    return (
        <VStack gap="2" align="start">
            {operationDeclarations.map((od, index) => {
                // const dataTypeConfig = menuConfigs.find(
                //     (config) => dataType.category.toLocaleLowerCase() === config.categoryType
                // );

                const icon = od.iconId;

                return (
                    <Dropdown.Menu.List.Item key={index} as="div">
                        <Box
                            key={index}
                            // onDragStart={(event) => onDragStart(event, menuItem)}
                            onClick={() => {}}
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

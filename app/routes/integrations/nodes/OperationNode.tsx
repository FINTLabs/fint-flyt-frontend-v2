import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';
import React from 'react';
import { Connection } from 'reactflow';
import { OperationDeclaration } from '../types/Operation';
import { BaseNode } from './BaseNode';

interface Props {
    id: string;
    type: string;
    selected: boolean;
    data: OperationDeclaration;
}

const OperationNode: React.FC<Props> = ({ data, selected }) => {
    const leftHandles = data.operationVariables.inputVariables.sort((a, b) => a.order - b.order);
    const rightHandles = data.operationVariables.outputVariables.sort((a, b) => a.order - b.order);

    const isValidConnection = (connection: Connection) => {
        console.log('Connection Attempt:', connection);
        return true;
    };

    return (
        <BaseNode
            title={data.displayText}
            leftHandles={leftHandles}
            rightHandles={rightHandles}
            selected={selected}
            iconId={data.iconId}
            isValidConnection={isValidConnection}></BaseNode>
    );
};

export default OperationNode;

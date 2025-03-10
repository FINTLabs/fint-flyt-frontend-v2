import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';
import React from 'react';
import { Connection } from 'reactflow';
import {
    InnerFlowOperationDeclaration,
    OperationDeclaration,
    VariableDeclaration,
} from '../types/Operation';
import { BaseNode } from './BaseNode';
import { getDisplayText, getHandles, getIconId } from './utils';

interface Props {
    id: string;
    type: string;
    selected: boolean;
    data: OperationDeclaration;
}

const OperationNode: React.FC<Props> = ({ data, type, selected }) => {
    const displayText = getDisplayText(type, data);
    const iconId = getIconId(type, data);
    const { leftHandles, rightHandles } = getHandles(type, data);

    const isValidConnection = (connection: Connection) => {
        console.log('Connection Attempt:', connection);
        return true;
    };

    return (
        <BaseNode
            title={displayText}
            leftHandles={leftHandles}
            rightHandles={rightHandles}
            selected={selected}
            iconId={iconId}
            type={type}
            isValidConnection={isValidConnection}></BaseNode>
    );
};

export default OperationNode;

import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';
import React from 'react';
import { Connection, Position } from 'reactflow';
import nodeConfig from '~/routes/integrations/nodes/config';
import CustomHandle from './CustomHandle';
import { OperationDeclaration } from '../types/Operation';
import { BaseNode } from './BaseNode';

interface Props {
    id: string;
    type: string;
    selected: boolean;
    data: OperationDeclaration;
}

const OperationNode: React.FC<Props> = ({ data, type, selected }) => {
    // console.log('OperationNode: ', data);

    const renderIcon = () => {
        if (data.iconId === 'ChevronRightDoubleCircleFillIcon') {
            return <ChevronRightDoubleCircleFillIcon title="a11y-title" fontSize="40px" />;
        } else {
            return (
                <span className="material-symbols-outlined text-left text-[40px]">
                    {data.iconId}
                </span>
            );
        }
    };

    const backgroundColor = 'bg-sky-200';
    const leftHandles = data.operationVariables.inputVariables.sort((a, b) => a.order - b.order);
    const rightHandles = data.operationVariables.outputVariables.sort((a, b) => a.order - b.order);
    const maxHandles =
        leftHandles.length > rightHandles.length ? leftHandles.length : rightHandles.length;

    const dynamicHeight = `${maxHandles > 2 ? maxHandles * 2 : 5}rem`;

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

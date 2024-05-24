import React, {useState} from "react";
import {Handle, NodeProps, NodeToolbar, Position, useStore} from "reactflow";
import {Button, TextField} from "@navikt/ds-react";
import RemoveIcon from "~/components/imageUtils/RemoveIcon";


function StaticValueNode({ id, data }: NodeProps) {
    const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);
    const hasParent = useStore((store) => !!store.nodeInternals.get(id)?.parentId);

    const validateInput = (value: string): void => {
        if (data.inputType === 'decimal') {
            const decimalPattern = /^[0-9]*[.,][0-9]+$/;
            setErrorMsg(decimalPattern.test(value) ? undefined : "Please enter a decimal number");
        }
    };

    function onDelete() {
        console.log("Delete");
    }

    function onDetach() {
        console.log("Detach");
    }

    function getIcon(inputType: string) {
        switch (inputType) {
        case 'text':
            return 'text_fields';
        case 'number':
            return 'numbers';
        case 'decimal':
            return 'decimal_increase';
        case 'time':
            return 'schedule';
        case 'date':
            return 'calendar_today';
        case 'datetime':
            return 'calendar_clock';
        default:
            return 'text_fields';
    }
    }

    return (
        <div className="relative bg-gray-100 p-1 rounded-2xl flex items-center border border-black">
            <span className="material-symbols-outlined mr-1">{getIcon(data.inputType)}</span>

            <NodeToolbar className="nodrag" position={Position.Bottom} >
                {/*<button onClick={onDelete}>Delete</button>*/}
                {hasParent && <Button onClick={onDetach} icon={<RemoveIcon />} size="xsmall" variant="secondary"/>}
            </NodeToolbar>

            <TextField
                // type={getInputType(data.inputType)}
                type={data.inputType}
                className="mr-2"
                label={''}
                hideLabel
                size="small"
                title="Please enter a decimal number"
                error={errorMsg}
                onChange={(e) => validateInput(e.target.value)}
            />

            <Handle type="source" position={Position.Right}/>
            <Handle type="target" position={Position.Left}/>

        </div>
    );
};

export default StaticValueNode;

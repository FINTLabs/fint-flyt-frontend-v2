import { Handle, Position } from "reactflow";
import { FileTextIcon, NumberListIcon, EnvelopeOpenIcon, ClockIcon } from '@navikt/aksel-icons';
import { TextField } from "@navikt/ds-react";
import React, { useState } from "react";

interface NodeData {
    inputType: "number" | "email" | "password" | "tel" | "text" | "decimal" | "time";
}

interface StaticValueNodeProps {
    data: NodeData;
}

const getIcon = (inputType: NodeData['inputType']): JSX.Element => {
    const iconProps = { title: "a11y-title", fontSize: "1.5rem" };
    switch (inputType) {
        case 'number':
        case 'decimal':
            return <NumberListIcon {...iconProps} />;
        case 'email':
            return <EnvelopeOpenIcon {...iconProps} />;
        case 'time':
            return <ClockIcon {...iconProps} />;
        default:
            return <FileTextIcon {...iconProps} />;
    }
};

const StaticValueNode: React.FC<StaticValueNodeProps> = ({ data }) => {
    const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

    const getInputType = (inputType: NodeData['inputType']): "number" | "email" | "password" | "tel" | "text" | "time" | "url" => {
        if (inputType === 'decimal') {
            return "number";
        }
        if (["number", "email", "password", "tel", "text", "time", "url"].includes(inputType)) {
            return inputType as "number" | "email" | "password" | "tel" | "text" | "time" | "url";
        }
        throw new Error(`Invalid inputType: ${inputType}`);
    };

    const validateInput = (value: string): void => {
        if (data.inputType === 'decimal') {
            const decimalPattern = /^[0-9]*[.,][0-9]+$/;
            setErrorMsg(decimalPattern.test(value) ? undefined : "Please enter a decimal number");
        }
    };

    return (
        <div className="relative bg-gray-100 p-1 rounded-2xl flex items-center border border-black">
            {getIcon(data.inputType)}
            <TextField
                type={getInputType(data.inputType)}
                className="mr-2"
                label={''}
                hideLabel
                size="small"
                title="Please enter a decimal number"
                error={errorMsg}
                onChange={(e) => validateInput(e.target.value)}
            />
            <Handle type="source" position={Position.Right} className="absolute right-0 m-auto" />
        </div>
    );
};

export default StaticValueNode;

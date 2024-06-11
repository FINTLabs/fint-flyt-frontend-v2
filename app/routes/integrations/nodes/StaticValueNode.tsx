import {useState} from "react";
import {Handle, NodeProps, NodeToolbar, Position, useStore} from "reactflow";
import {Button, DatePicker, Switch, TextField, useDatepicker} from "@navikt/ds-react";
import RemoveIcon from "~/components/imageUtils/RemoveIcon";
import useDetachNodes from "~/routes/integrations/utils/useDetachNodes"


function StaticValueNode({ id, data }: NodeProps) {
    const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);
    const hasParent = useStore((store) => !!store.nodeInternals.get(id)?.parentId);
    const nodeInternals = useStore((store) => store.nodeInternals.values());
    const detachNodes = useDetachNodes();

    const { datepickerProps, inputProps } = useDatepicker({
        fromDate: new Date("Aug 23 2019"),
        onDateChange: console.log,
    });

    const validateInput = (value: string): void => {
        if (data.inputType === 'decimal') {
            const decimalPattern = /^[0-9]*[.,][0-9]+$/;
            setErrorMsg(decimalPattern.test(value) ? undefined : "Please enter a decimal number");
        }
    };

    // function onDelete() {
    //     console.log("Delete");
    // }

    function onDetach() {
        console.log("Detach");
        const childNodeIds = Array.from(nodeInternals)
            .filter((n) => n.parentId === id)
            .map((n) => n.id);

        detachNodes(childNodeIds, id);

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
            case 'boolean':
                return 'toggle_on';
            default:
                return 'text_fields';
        }
    }

    function renderInput() {
    if (data.inputType === 'date') {
        return (
            <DatePicker {...datepickerProps}>
                <DatePicker.Input {...inputProps} label="Velg dato" hideLabel={true} size="small"/>
            </DatePicker>
        );
    } else if (data.inputType === 'boolean') {
        return (
            <Switch size="small" position={"right"}>{data.label}</Switch>
        );
    } else if (data.inputType === 'datetime') {
        return (
            <>
                <DatePicker {...datepickerProps}>
                    <DatePicker.Input {...inputProps} label="Velg dato" hideLabel={true} size="small"/>
                </DatePicker>
                <TextField
                    type="time"
                    className="mr-2"
                    label={''}
                    hideLabel
                    size="small"
                />
            </>
        );
    } else {
        return (
            <TextField
                type={data.inputType}
                className="mr-2"
                label={''}
                hideLabel
                size="small"
                title="Please enter a decimal number"
                error={errorMsg}
                onChange={(e) => validateInput(e.target.value)}
            />
        );
    }
}

    return (
        <div className="flex min-w-36 h-9 pl-1.5 pr-2.5 py-1.5 bg-gray-200 rounded border border-black justify-end items-center gap-1.5">
            <NodeToolbar className="nodrag" position={Position.Bottom}>
                {hasParent && <Button onClick={onDetach} icon={<RemoveIcon/>} size="xsmall" variant="secondary"/>}
            </NodeToolbar>
            <div className="w-5 h-4 p-2.5 justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative">
                    <span className="material-symbols-outlined mr-1">{getIcon(data.inputType)}</span>
                </div>
            </div>
            {renderInput()}
            <Handle type={"source"} position={Position.Right} className="absolute z-10 w-16" id={"123"}/>
            <Handle type={"target"} position={Position.Left}  className="absolute z-10 w-16 !bg-teal-500" id={"456"}/>
        </div>
    );
}

export default StaticValueNode;
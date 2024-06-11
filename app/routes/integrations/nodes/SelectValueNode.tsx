import {useState} from "react";
import {Handle, NodeProps, NodeToolbar, Position, useStore} from "reactflow";
import {Button, DatePicker, Select, Switch, TextField, useDatepicker} from "@navikt/ds-react";
import RemoveIcon from "~/components/imageUtils/RemoveIcon";
import useDetachNodes from "~/routes/integrations/utils/useDetachNodes"


function SelectValueNode({ id, data }: NodeProps) {
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

    return (
        <div
            className="flex min-w-36 h-9 pl-1.5 pr-2.5 py-1.5 bg-gray-200 rounded border border-black justify-end items-center gap-1.5">

            <NodeToolbar className="nodrag" position={Position.Bottom}>
                {hasParent && <Button onClick={onDetach} icon={<RemoveIcon/>} size="xsmall" variant="secondary"/>}
            </NodeToolbar>

            <div className="w-5 h-4 p-2.5 justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative">
                    <span className="material-symbols-outlined mr-1">database</span>
                </div>
            </div>


                        <Select label="Hvilket land har du bosted i?" size="small" hideLabel>
                              <option value="">Velg land</option>
                              <option value="norge">Norge</option>
                              <option value="sverige">Sverige</option>
                              <option value="danmark">Danmark</option>
                            </Select>


            <Handle type={"source"} position={Position.Right} className="absolute z-10 w-16" id={"123"}/>
            <Handle type={"target"} position={Position.Left} className="absolute z-10 w-16 !bg-teal-500" id={"456"}/>
        </div>
    );
}

export default SelectValueNode;
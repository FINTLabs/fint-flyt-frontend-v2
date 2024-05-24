import { Handle, Position } from "reactflow";
import {HStack} from "@navikt/ds-react";

interface NodeData {
    label: string;
}

interface NodeProps {
    data: NodeData;
}
function SubFlowNode({ data }: NodeProps)  {

    return (
        <HStack className="rounded-lg border border-black overflow-hidden relative" style={{width: '50rem'}}>
            <div className="absolute top-0 left-0 m-2">
                {data.label}
            </div>
            <div className="aspect-square h-60 w-12 bg-gray-200" />
            <div className="aspect-square h-60 flex-grow" style={{backgroundColor: '#ffffff'}}/>
            <div className="aspect-square h-60 w-12 bg-gray-200 " />
            <Handle type="target" position={Position.Left}/>
        </HStack>
    );
}

export default SubFlowNode;
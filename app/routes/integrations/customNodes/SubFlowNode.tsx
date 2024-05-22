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
        <HStack className="rounded-lg border border-black overflow-hidden" style={{width: '50rem'}}>
            {data.label}
            <div className="aspect-square h-60 w-12" style={{ backgroundColor: '#FFE6C1' }}/>
            <Handle type="source" position={Position.Left}  />
        </HStack>
    );
}

export default SubFlowNode;
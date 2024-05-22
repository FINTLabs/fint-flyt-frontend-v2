import { Handle, Position } from "reactflow";

interface NodeData {
    inputType: string;
}

interface CustomNodeProps {
    data: NodeData;
}

function channelNode({ data }: CustomNodeProps) {
    return (
        <div className="text-center">
            <div className="absolute z-10 bottom-full mb-2 text-center">{data?.inputType}</div>
            <div
                className="relative h-[100px] w-[100px] bg-[#FFE6C1] rounded-2xl flex items-center justify-center border border-black">
                <img src="../images/input.svg" className="h-[50px]" alt="input" />
                <Handle type="source" position={Position.Right} className="absolute right-0 m-auto" />
            </div>

        </div>
    );
}

export default channelNode;
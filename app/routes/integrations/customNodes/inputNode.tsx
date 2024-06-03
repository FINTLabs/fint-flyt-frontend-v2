import { Handle, Position } from "reactflow";
import { CustomHandle } from "../customHandles/customHandle";

interface NodeData {
    inputType: string;
}

interface CustomNodeProps {
    data: NodeData;
}
function InputNode({ data }: CustomNodeProps ) {
  return (
    <div className="flex justify-center">
      <div className="absolute z-10 bottom-full mb-2 w-[100px] text-center">
        Input Node
      </div>
      <div className="relative h-[100px] w-[100px] bg-[#FFE6C1] rounded-2xl flex items-center justify-center border border-black">
        <img src="../images/input.svg" className="h-[50px]" alt="input" />
      </div>
      <CustomHandle
        position={Position.Right}
        labeltype="object"
        labeltext="Objekt"
      />
    </div>
  );
}

export default InputNode;

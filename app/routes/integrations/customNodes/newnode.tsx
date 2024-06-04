import { Handle, Position } from "reactflow";
import { CustomHandle } from "../Handles/customProcessHandle";
import CustomHandleCollection from "../Handles/customHandle";

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
    <CustomHandleCollection position={Position.Left} labelText="blabla" id="12222" icon="text_fields"    />
    </div>
  );
}

export default InputNode;

import { Position } from "reactflow";
import { CustomHandle } from "./customHandle";
import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';

interface NodeData {
    inputType: string;
}

interface CustomNodeProps {
    data: NodeData;
}
function OutputNode({ data }: CustomNodeProps ) {
  return (
    <div className="flex justify-center">
      <CustomHandle
        position={Position.Left}
        labeltype="object"
        labeltext="Objekt"
      />
      <div className="absolute z-10 bottom-full mb-2 w-[100px] text-center">
        Output Node
      </div>
      <div className="relative h-[100px] w-[100px] bg-[#FFE6C1] rounded-2xl flex items-center justify-center border border-black">
      <ChevronRightDoubleCircleFillIcon title="a11y-title" fontSize="60px" />
      </div>
      <CustomHandle
        position={Position.Right}
        labeltype="object"
        labeltext="Objekt (Optional)"
      />
    </div>
  );
}

export default OutputNode;

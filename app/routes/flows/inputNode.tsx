import { Handle, Position } from "reactflow";

function inputNode({ data }) {
  return (
      <div className="">
          <div className="absolute z-10 bottom-full mb-2 w-[100px] text-center">Input Node
          </div>
          <div
              className="relative h-[100px] w-[100px] bg-[#FFE6C1] rounded-2xl flex items-center justify-center border border-black">
            <img src="../images/input.svg" className="h-[50px]" alt="input" />
            <Handle type="source" position={Position.Right} className="absolute right-0 m-auto" />
          </div>
      </div>
  );
}

export default inputNode;
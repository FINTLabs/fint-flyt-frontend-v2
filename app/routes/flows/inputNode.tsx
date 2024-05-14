import { Handle, Position } from "reactflow";

function inputNode({ data }) {
  return (
    <div>
      <div className="h-[100px] w-[100px] bg-[#FFE6C1] rounded-2xl flex items-center justify-center border border-black">
        <img src="../images/input.svg" className="h-[50px]" alt="input" />
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default inputNode;

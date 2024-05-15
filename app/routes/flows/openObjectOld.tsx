import { Handle, Position } from "reactflow";

const sourceHandle1 = { top: 30 };
const sourceHandle2 = { top: 60 };
const sourceHandle3 = { top: 90 };
const sourceHandle4 = { top: 120 };

function openObjectNodeOld({ data }) {
  return (
    <div>
      <Handle type="target" position={Position.Left} />
      <div
        className={`w-16 h-[150px] flex flex-col items-center justify-center bg-slate-300 rounded-xl border border-black`}
      >
        <img
          src="../images/openObject.svg"
          alt="åpne Objekt"
          className="h-[50px]"
        />
        <p className="text-sm">pre-set</p>
      </div>
      <Handle type="source" position={Position.Right} style={sourceHandle1} />
      <Handle type="source" position={Position.Right} style={sourceHandle2} />
      <Handle type="source" position={Position.Right} style={sourceHandle3} />
      <Handle type="source" position={Position.Right} style={sourceHandle4} />
    </div>
  );
}
export default openObjectNodeOld;

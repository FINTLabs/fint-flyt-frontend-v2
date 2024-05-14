import { Handle, Position } from "reactflow";

const sourceHandle1 = { top: 20 };
const sourceHandle2 = { top: 60 };
const sourceHandle3 = { top: 90 };
const sourceHandle4 = { top: 120 };

const nodeAmount = 4

function openObjectNode({ data }) {
  return (
    <div>
      <Handle type="target" position={Position.Left} />
      <div className="h-[150px] w-16 flex items-center justify-center bg-slate-300 rounded-xl border border-black">
        <img
          src="../images/openObject.svg"
          alt="åpne Objekt"
          className="h-[50px]"
        />
      </div>





      <Handle type="source" position={Position.Right} style={sourceHandle1} />
      <Handle type="source" position={Position.Right} style={sourceHandle2} />
      <Handle type="source" position={Position.Right} style={sourceHandle3} />
      <Handle type="source" position={Position.Right} style={sourceHandle4} /> 
    </div>
  );
}
export default openObjectNode;

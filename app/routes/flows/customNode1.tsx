import { Handle, Position } from "reactflow"


function CustomNode1({data}) {
    return (
        <div>
        <div className="h-8 w-24 bg-black rounded-lg border-white border flex items-center justify-center">
        <p>Input</p>
        </div>
        <Handle
            type="source"
            position={Position.Right}
            className="w-12 !bg-teal-500"
        />
        
        </div>
    )
}

export default CustomNode1
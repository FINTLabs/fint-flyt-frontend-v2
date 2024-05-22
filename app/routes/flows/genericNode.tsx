import { Handle, Position } from "reactflow";

function GenericNode({ data }) {

    return(
        <div className="justify-center flex">
            <Handle type="target" position={Position.Left} className="absolute z-10" />
                <div className="absolute z-10 mb-2 w-[150px] bottom-full text-center">Generic Node
                </div>
                    <div
                    className="relative h-[100px] w-[100px] bg-teal-200 rounded-2xl flex items-center justify-center border border-black">
                    </div>
            <Handle type="source" position={Position.Right} className="absolute z-10" />



        </div>
        
    )
}

export default GenericNode;
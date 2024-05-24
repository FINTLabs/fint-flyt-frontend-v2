import { Handle, Position } from "reactflow";
import { CustomHandle } from "./customHandles";



function GenericNode({ data }) {

    return(
        <div className="flex justify-center">
            <CustomHandle position={Position.Left} id="1" labeltype="fail" labeltext="Objekt"/>
                <div className="absolute z-10 mb-2 w-[150px] bottom-full text-center">Generic Node
                </div>
                    <div
                    className="relative h-[100px] w-[100px] bg-teal-200 rounded-2xl flex items-center justify-center border border-black">
                    </div>
            <CustomHandle position={Position.Right} id="2" labeltype="success" labeltext="success"/>
        </div>
    )
}

export default GenericNode;
import { Handle, Position } from "reactflow";
import CustomHandle from "./handles";


function GenericNode({ data }) {

    return(
        <div className="justify-center flex">
            <Handle type="target" position={Position.Left} id="1" className="absolute z-10" />
                <div className="absolute z-10 mb-2 w-[150px] bottom-full text-center">Generic Node
                </div>
                    <div
                    className="relative h-[100px] w-[100px] bg-teal-200 rounded-2xl flex items-center justify-center border border-black"/>
                    
            <div>
            <CustomHandle position={Position.Left} id="2" labeltype="success"/>
            <CustomHandle position={Position.Left} id="3" labeltype="fail" className="top-10" />
            <CustomHandle position={Position.Left} id="4" labeltype="object" labeltext="Objekt" className="top-16" />
            </div>
        </div>
    )
}

export default GenericNode;
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
            <CustomHandle position={Position.Right} id="2" labeltype="name" labeltext="Really long name that should be shorter but isn't. How long can these names even be? However long I want them to be because I coded this in a way that makes it possible to have super long names!"/>
        </div>
    )
}

export default GenericNode;
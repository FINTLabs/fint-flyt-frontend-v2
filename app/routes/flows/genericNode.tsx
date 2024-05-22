import { Handle, Position } from "reactflow";
import CustomHandle from "../flow/CustomHandle";

function GenericNode({ data }) {

    console.log(<CustomHandle/>)

    return(
        <div className="justify-center flex">
            <Handle type="target" position={Position.Left} id="1" className="absolute z-10" />
                <div className="absolute z-10 mb-2 w-[150px] bottom-full text-center">Generic Node
                </div>
                    <div
                    className="relative h-[100px] w-[100px] bg-teal-200 rounded-2xl flex items-center justify-center border border-black">
                    </div>
            <CustomHandle position={Position.Right} labeltype="success" id="2" />

            {/* <div className="flex flex-row items-center">
            <Handle type="source" position={Position.Right} className="absolute z-10" id="2" />
                <div className="bg-white absolute text-nowrap justify-center flex flex-row text-xs ml-2 border rounded-2xl px-4 p-1">
                    <img src="images/success.svg" alt="success" className="pr-1"/>
                    <p>Suksess</p>
                </div>
            </div> */}
        </div>
    )
}

export default GenericNode;
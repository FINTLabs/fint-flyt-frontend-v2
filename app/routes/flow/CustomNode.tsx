import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { DatabaseIcon } from '@navikt/aksel-icons';
import { GlassesIcon } from '@navikt/aksel-icons';

function CustomNode({ data }) {
    return (
        // <div className="relative px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
        //     <div className="flex">
        //         <DatabaseIcon title="a11y-title" fontSize="1.5rem"/>
        //         <div className="ml-2">
        //             <div className="text-sm text-amber-800 font-bold">{data.name}</div>
        //             <div className="text-gray-500 text-sm">{data.job}</div>
        //         </div>
        //     </div>
        //
        //     <Handle type="source" position={Position.Right} className="w-16 !bg-teal-500" id={'handle-0'}/>
        //
        // </div>

        <div className={"flex"}>
            <div className="relative shadow-md rounded-md bg-white border-2 border-stone-400 flex items-center justify-center m-2">
                <GlassesIcon title="a11y-title" fontSize="1.5rem"/>
            </div>
            <div className="relative shadow-md rounded-md bg-white  ">
                <div className="relative px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
                    <Handle type="source" position={Position.Right} className="w-16 !bg-teal-500" id={'handle-0'}/>
                </div>

                <div className="relative px-4 py-2 shadow-md rounded-md bg-white ">
                    <Handle type="source" position={Position.Right} className="w-16 !bg-teal-500" id={'handle-1'}/>
                </div>

                <div className="relative px-4 py-2 shadow-md rounded-md bg-white ">
                    <Handle type="source" position={Position.Right} className="w-16 !bg-teal-500" id={'handle-2'}/>
                </div>

                <div className="relative px-4 py-2 shadow-md rounded-md bg-white ">
                    <Handle type="source" position={Position.Right} className="w-16 !bg-teal-500" id={'handle-3'}/>
                </div>

                <div className="relative px-4 py-2 shadow-md rounded-md bg-white ">
                    <Handle type="source" position={Position.Right} className="w-16 !bg-teal-500" id={'handle-4'}/>
                </div>
            </div>
        </div>

    );
}

export default memo(CustomNode);
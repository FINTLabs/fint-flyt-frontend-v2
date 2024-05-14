import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { DatabaseIcon } from '@navikt/aksel-icons';
import { GlassesIcon } from '@navikt/aksel-icons';
import {Heading, Label} from "@navikt/ds-react";

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

        // <div className={"flex"}>
        <div className="bg-gray-200 rounded-xl border border-black flex justify-end p-5">
            {/*<div className="relative">*/}
            <div className="flex flex-col">

                {data.connections.map((c, index) => (
                    <div
                        key={c.id}
                        className="relative  shadow-md rounded-md bg-white border-2 border-stone-400 mt-3"
                        // style={{display: 'inline-block'}}
                    >
                        <Heading size="xsmall">{c.name}</Heading>
                        <Handle
                            isConnectable={true}
                            key={c.id}
                            type="source"
                            position={Position.Right}
                            className="w-12 !bg-teal-500"
                            id={'2'}
                            isConnectable={true}
                        />
                    </div>
                ))}

            </div>

            </div>
        // </div>

    );
}

export default memo(CustomNode);
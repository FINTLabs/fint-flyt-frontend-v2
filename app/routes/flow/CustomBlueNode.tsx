import React, { memo } from 'react';
import {Handle, Position} from "reactflow";
import {ArrowsCirclepathIcon} from "@navikt/aksel-icons";

function CustomBlueNode({ data }) {

    return (

        <div className="w-24 h-24 relative shadow">
            <div className="w-24 h-24 left-0 top-0 absolute bg-sky-200 rounded-xl border border-black"/>
            <div className="w-11 h-11 left-[28px] top-[28px] absolute">

                <ArrowsCirclepathIcon title="a11y-title" fontSize="1.5rem" className="w-11 h-11 relative"/>

            </div>
            <Handle
                // key={c.id}
                type="source"
            position={Position.Right}
            className="w-12 !bg-teal-500"
            id={'3'}
        />
        </div>

    );
}

export default memo(CustomBlueNode);
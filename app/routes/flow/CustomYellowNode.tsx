import React, { memo } from 'react';
import {Handle, Position} from "reactflow";
import {ArrowsCirclepathIcon} from "@navikt/aksel-icons";

function CustomYellowNode({ data }) {

    return (

        <div className="w-24 h-24 relative shadow">
            <div className="w-24 h-24 left-0 top-0 absolute bg-white rounded-xl border-8 border-black/opacity-5"/>
            <div className="w-11 h-11 left-[28px] top-[28px] absolute"/>
        </div>

    );
}

export default memo(CustomYellowNode);
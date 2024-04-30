import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import {CheckmarkCircleFillIcon, ExclamationmarkTriangleFillIcon} from '@navikt/aksel-icons';
import {Heading} from "@navikt/ds-react";
import CustomHandle from "~/routes/flow/CustomHandle";

function CustomNode({ data }) {

    return (
        <div className="px-4 py-2 shadow-md rounded-md bg-amber-50 border-2 border-stone-400 ">
            {/*<div className="flex">*/}
            {/*    <ChevronRightCircleIcon title="a11y-title" fontSize="1.5rem" />*/}
            {/*    <div className="ml-2">*/}
            {/*        <div className="text-sm font-bold text-emerald-700">{data.name}</div>*/}
            {/*        <div className="text-gray-500 text-sm">{data.job}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*/!*<Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />*!/*/}
            {/*<Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />*/}
            <div
                className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    viewBox="0 0 15 15"
                    fill="currentColor"
                >
                    {data.isOk ? (
                        <CheckmarkCircleFillIcon title="a11y-title" fontSize="1rem" className="text-green-500"/>
                    ) : (
                        <ExclamationmarkTriangleFillIcon title="a11y-title" fontSize="1rem" className="text-red-500"/>
                    )}
                </svg>


            </div>
            <div className="ml-2">
                <Heading size="xsmall">{data.name}</Heading>
                <div className="text-gray-500 text-sm">{data.job}</div>
                <Handle type="source" position={Position.Right} className="w-16 !bg-teal-500" id={'100'}/>
            </div>
            <div className="ml-2">
                <Heading size="xsmall">{data.name}</Heading>
                <div className="text-gray-500 text-sm">{data.job}</div>
                <Handle type="source" position={Position.Right} className="w-16 !bg-teal-500" id={'200'}/>
            </div>
            {/*<Handle type="source" position={Position.Right} className="w-16 !bg-teal-500" id={'200'}/>*/}

        </div>
    );
}

export default memo(CustomNode);
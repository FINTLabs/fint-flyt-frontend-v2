import {NodeToolbar, Position} from "reactflow";
import React, {useState} from "react";
import CustomHandleCollection from "~/routes/integrations/customHandles/customHandleCollection";
import {Button} from "@navikt/ds-react";

interface CustomNodeProps {
    id: string;
    selected: boolean;
    data: {
        label: string,
        inputType: string,
        icon: string
        hasToolbar?: boolean;
    }
}

function MathNode({ data, selected }: CustomNodeProps) {
    const [handleIcon, setHandleIcon] = useState('tag'); // default icon is 'tag'

    return (
        <div className={`flex justify-center  ${selected ? 'border-black border' : ''}`}>

            {data.hasToolbar && (
                <NodeToolbar
                    position={Position.Top}
                >
                    <Button variant="tertiary" size="xsmall" onClick={() => setHandleIcon('decimal_increase')}>decimal</Button>
                    <Button variant="tertiary" size="xsmall" onClick={() => setHandleIcon('tag')}>whole</Button>
                </NodeToolbar>
            )}

            <div className="flex flex-row items-center">
                <div
                    className="flex flex-col h-[50%] justify-between"
                    // style={{ position: 'relative', height: `${componentHeight}px` }}
                >

                    <CustomHandleCollection position={Position.Left} id="1" icon={handleIcon} labelText="Added"/>
                    <CustomHandleCollection position={Position.Left} id="2" icon={handleIcon} labelText="Added"/>
                </div>
            </div>

            <div className="flex flex-row items-center">

                <div
                    className="w-16 flex flex-col  bg-zinc-100 rounded-xl border border-black h-20"
                    // style={{ height: `${componentHeight}px` }}
                >
                    <span className="material-symbols-outlined text-left">calculate</span>
                    <span className="material-symbols-outlined text-3xl text-center">{data.icon}</span>

                </div>
                {/*<div*/}
                {/*    className="flex flex-col h-[50%] justify-between"*/}
                {/*    // style={{ position: 'relative', height: `${componentHeight}px` }}*/}
                {/*>*/}

                    <CustomHandleCollection position={Position.Right} id="3" icon={handleIcon} labelText="Sum"/>
                {/*</div>*/}
            </div>
        </div>
    );
}

export default MathNode;
import {Handle, NodeResizer, Position, useStore} from "reactflow";
import {getRelativeNodesBounds} from "~/routes/integrations/utils/utils";
import {D3DragEvent} from "d3-drag";
import {useState} from "react";
import {HStack} from "@navikt/ds-react";


interface NodeProps {
    id: string;
    selected: boolean;
    data: {
        label: string,
        inputType: string,
        leftInput: number,
        rightInput: number,
    }
}

interface ResizeParams {
    width: number;
    height: number;
}

// Define the onResize function with the correct type signature


function CollectionNode({ id, data, selected }: NodeProps)  {
    const [height, setHeight] = useState(200);
    const [width, setWidth] = useState(200);

    const onResize = (event: D3DragEvent<HTMLDivElement, null, never>, params: ResizeParams) => {
        const { width, height } = params;
        setWidth(width);
        setHeight(height);
    };

    const { minWidth, minHeight, hasChildNodes } = useStore((store) => {
        const childNodes = Array.from(store.nodeInternals.values()).filter(
            (n) => n.parentId === id
        );

        const rect = getRelativeNodesBounds(childNodes);

        if(childNodes.length === 0) {
            return {
                minWidth: 400,
                minHeight: 200,
                hasChildNodes: false,
            };
        }

        return {
            minWidth: rect.x + rect.width,
            minHeight: rect.y + rect.height,
            hasChildNodes: childNodes.length > 0,
        };
    });

    return (
        <HStack className={'flex flex-row'}>
            <NodeResizer
                minHeight={minHeight}
                minWidth={minWidth}
                onResize={onResize}
                lineStyle={{borderColor: 'black'}}
                isVisible={selected}
            />

            {/*<div*/}
            {/*    className="flex"*/}
            {/*    style={{*/}
            {/*        width: '400px',*/}
            {/*        height: '250px',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <div*/}
            {/*        className="flex-none"*/}
            {/*        style={{*/}
            {/*            flexBasis: '3%',*/}
            {/*            backgroundColor: 'lightgray',*/}
            {/*        }}*/}
            {/*    ></div>*/}
            {/*    <div*/}
            {/*        className="flex-1"*/}
            {/*        style={{*/}
            {/*            backgroundColor: 'white', // Assuming you want a different background color for the middle box*/}
            {/*        }}*/}
            {/*    >*/}

            {/*            {data.inputType} ({hasChildNodes ? 'has children' : 'no children'}) (h: {height}, w: {width})*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className="flex-none"*/}
            {/*        style={{*/}
            {/*            flexBasis: '3%',*/}
            {/*            backgroundColor: 'lightgray',*/}
            {/*        }}*/}
            {/*    ></div>*/}
            {/*</div>*/}
            <div className=' w-12 bg-zinc-100 rounded-tl-lg rounded-bl-lg shadow border border-black ' style={{height: height}}/>

            <div className="aspect-square flex flex-grow" style={{backgroundColor: 'lightblue', height: height}}>
                {data.inputType} ({hasChildNodes ? 'has children' : 'no children'}) (h: {height}, w: {width})

                {data.leftInput !== 0 && Array.from({length: data.leftInput}).map((_, index) => (
                    <div
                        key={index}
                        className=" h-12 flex-col justify-start items-start gap-2.5 inline-flex"
                        style={{transform: `translateY(${index + 10 * 3}px)`}}
                    >
                        <div
                            className="px-2.5 py-0.5 bg-zinc-100 rounded-xl shadow border border-black justify-start items-center gap-1 flex">
                            <span className="material-symbols-outlined left-0 top-0">text_fields</span>
                            <div>In Element</div>
                        </div>
                    </div>
                ))}

                {data.rightInput === 1 && (
                    <div
                        className="w-40 h-12 flex-col justify-start items-start gap-2.5 inline-flex"
                        style={{transform: ' translateY(100px)'}}
                    >
                        <div
                            className="px-2.5 py-0.5 bg-zinc-100 rounded-xl shadow border border-black justify-start items-center gap-1 flex">
                            <span className="material-symbols-outlined left-0 top-0">text_fields</span>
                            <div>Out Element</div>
                        </div>
                    </div>
                )}
            </div>

            <div className="w-12 bg-zinc-100 rounded-tr-lg rounded-br-lg border border-black" style={{height: height}}/>
            <Handle type={"target"} position={Position.Left}/>
            <Handle type={"source"} position={Position.Right}/>
        </HStack>
    );
}

export default CollectionNode;
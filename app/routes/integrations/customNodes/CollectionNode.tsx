import {NodeResizer, Position, useStore} from "reactflow";
import {getRelativeNodesBounds} from "~/routes/integrations/utils/utils";
import {HStack} from "@navikt/ds-react";
import {CustomHandle} from "~/routes/integrations/customNodes/customHandle";

interface NodeProps {
    id: string;
    selected: boolean;
    data: {
        label: string,
        inputType: string
    }
}

function CollectionNode({ id, data, selected }: NodeProps)  {

    const { minWidth, minHeight, hasChildNodes, parentHeight, parentWidth } = useStore((store) => {
        const childNodes = Array.from(store.nodeInternals.values()).filter(
            (n) => n.parentId === id
        );

        const parentNode = store.nodeInternals.get(id);
        const rect = getRelativeNodesBounds(childNodes);

        if(childNodes.length === 0) {
            return {
                minWidth: 500,
                minHeight: 200,
                hasChildNodes: false,
                parentHeight: parentNode?.height,
                parentWidth: parentNode?.width,
            };
        }

        return {
            minWidth: rect.x + rect.width,
            minHeight: rect.y + rect.height,
            hasChildNodes: childNodes.length > 0,
            parentHeight: parentNode?.height,
            parentWidth: parentNode?.width,
        };
    });

    return (
            <HStack
                className="flex border-black rounded-3xl border"
                style={{
                    width: parentWidth? parentWidth : 500,
                    height: parentHeight? parentHeight : 200,
                }}
            >
                <NodeResizer
                    minHeight={minHeight + 20}
                    minWidth={minWidth + 20}
                    // onResize={onResize}
                    lineStyle={{borderColor: 'black'}}
                    isVisible={selected}
                />

                <CustomHandle position={Position.Left} labeltype="name" labeltext="Samling" id={"4"}/>
                {data.inputType === "subflow-reduce" ? (
                      <>
                        <CustomHandle position={Position.Right} labeltype="name" labeltext="reduce1" className="left-10 pb-10" id="400"/>
                        <CustomHandle position={Position.Right} labeltype="name" labeltext="reduce2"  className="left-10 pt-10" id="500"/>
                      </>
                    ) : (
                      <CustomHandle position={Position.Right} labeltype="object" labeltext="Element" className="left-10" id="3"/>
                    )}

                <div
                    className="flex-none rounded-l-3xl bg-zinc-100"
                    style={{
                        flexBasis: '40px',
                        // backgroundColor: 'lightgray',
                    }}
                >
                </div>

                <div
                    className="flex-1"
                    style={{
                        backgroundColor: 'white',
                    }}
                >

                        {data.inputType} ({hasChildNodes ? 'has children' : 'no children'}) (h: {parentHeight}, w: {parentWidth})
                </div>


                {["subflow-map", "subflow-reduce"].includes(data.inputType) ? (
                      <>
                        <CustomHandle position={Position.Right} labeltype="name" labeltext="thing" className="left-10" id="100"/>
                        <CustomHandle position={Position.Left} labeltype="name" labeltext="thing" id="200"/>
                      </>
                    ) : null}

                <div
                    className="flex-none rounded-r-3xl bg-zinc-100"
                    style={{
                        flexBasis: '40px',
                    }}
                ></div>
        </HStack>

    );
}

export default CollectionNode;
import {NodeResizer, Position, useStore} from "reactflow";
import {getRelativeNodesBounds} from "~/routes/integrations/utils/utils";
import {HStack} from "@navikt/ds-react";
import CustomHandleCollection from "~/routes/integrations/customNodes/customHandleCollection";
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

    //TODO: handles not working inside a parent.... whyyyyyy
    // create a array of handle types or something.. this is a mess

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

        // TODO set default with children to no less than width and height to 500 and 200
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



                {data.inputType === "subflow-reduce" ? (
                      <>
                          <CustomHandleCollection
                              position={Position.Left}
                              labelText="Samling"
                              id={"4"}
                              icon="tag"
                              isArray={true}

                          />
                        <CustomHandleCollection
                            position={Position.Right}
                            labelText="Element A"
                            className="left-10 pb-10"
                            id="400"
                            icon = "tag"

                        />
                        <CustomHandleCollection
                            position={Position.Right}
                            labelText="Element B"
                            className="left-10 pt-10"
                            id="500"
                            icon = "tag"
                        />
                      </>
                    ) : (
                        <>
                            <CustomHandleCollection
                                position={Position.Left}
                                labelText="Samling"
                                id={"4"}
                                icon="text_fields"
                                isArray={true}

                            />
                              <CustomHandleCollection
                                  position={Position.Right}
                                  labelText="Element"
                                  className="left-10"
                                  id="3"
                                  icon = "text_fields"
                              />
                        </>
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

                    {data.inputType} ({hasChildNodes ? 'has children' : 'no children'}) (h: {parentHeight},
                    w: {parentWidth})



                </div>


                {["subflow-map", "subflow-reduce"].includes(data.inputType) ? (
                    <>
                        <CustomHandleCollection
                            position={Position.Right}
                            labelText="thing"
                            className="left-10"
                            id="100"
                            icon="data_object"
                            isArray={true}
                        />
                        <CustomHandleCollection
                            position={Position.Left}
                            labelText="thing"
                            id="200"
                            icon="data_object"
                        />
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
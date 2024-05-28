import {Handle, NodeResizer, Position, useStore} from "reactflow";
import {HStack} from "@navikt/ds-react";
import {getRelativeNodesBounds} from "~/routes/integrations/utils/utils";

interface NodeProps {
    id: string;
    data: {
        label: string,
        inputType: string,
        leftInput: number,
        rightInput: number,
    }
}
function CollectionNode({ id, data }: NodeProps)  {

    const { minWidth, minHeight, hasChildNodes } = useStore((store) => {
        const childNodes = Array.from(store.nodeInternals.values()).filter(
            (n) => n.parentId === id
        );

        const rect = getRelativeNodesBounds(childNodes);

        return {
            minWidth: rect.x + rect.width,
            minHeight: rect.y + rect.height,
            hasChildNodes: childNodes.length > 0,
        };
    });

    return (
        <div>
            <NodeResizer
                minHeight={minHeight}
                minWidth={minWidth}
            />


            {data.inputType} ({hasChildNodes ? 'has children' : 'no children'}) (h: {minHeight}, w: {minWidth})

            {data.leftInput !== 0 && Array.from({length: data.leftInput}).map((_, index) => (
                <div
                    key={index}
                    className="w-40 h-12 flex-col justify-start items-start gap-2.5 inline-flex"
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
    );
}

export default CollectionNode;
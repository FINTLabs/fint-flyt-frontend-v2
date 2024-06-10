import { ChevronRightDoubleCircleFillIcon } from '@navikt/aksel-icons';
import React from "react";
import handlesConfig, {HandleConfig, handleConfigsRight} from "~/routes/integrations/customHandles/handlesConfig";
import CustomHandleCollection from "~/routes/integrations/customHandles/customHandleCollection";
import nodeConfig from "~/routes/integrations/nodes/config";

interface CustomNodeProps {
    id: string;
    selected: boolean;
    data: {
        nodeType: string;
        label: string;
        inputType: string;
        icon: string;
        hasToolbar?: boolean;
    };
}

const OutputNode: React.FC<CustomNodeProps> = ({ data, selected }) => {
    // const handles: HandleConfig[] = handlesConfig[data.inputType] || null;
    // const handlesRight: HandleConfig[] = handleConfigsRight[data.inputType] || null;
    const config = nodeConfig[data.inputType] || {};

    const renderIcon = () => {
        if (data.icon === 'ChevronRightDoubleCircleFillIcon') {
            return <ChevronRightDoubleCircleFillIcon title="a11y-title" fontSize="40px" />;
        } else {
            return (
                <span className="material-symbols-outlined text-left text-[40px]">
          {data.icon}
        </span>
            );
        }
    };

    console.log('custom channel node', data.inputType)

    return (
        <div className={`flex justify-center ${selected ? 'border-black border' : ''}`}>
            {config.customHandles?.left.map((handle: HandleConfig, index: number) => (
                <CustomHandleCollection
                    key={index}
                    position={handle.position}
                    labelText={handle.labelText}
                    id={handle.id}
                    icon={handle.icon}
                    className={handle.className}
                    isArray={handle.isArray}
                />
            ))}
            {/*<div className="absolute z-10 bottom-full mb-2 w-[100px] text-center">*/}
            {/*    Output Node*/}
            {/*</div>*/}

            <div className="relative bg-[#FFE6C1] rounded-2xl flex items-center justify-center border border-black p-4">
                {renderIcon()}
            </div>

            {config.customHandles.right?.map((handle: HandleConfig, index: number) => (
                <CustomHandleCollection
                    key={index}
                    position={handle.position}
                    labelText={handle.labelText}
                    id={handle.id}
                    icon={handle.icon}
                    className={handle.className}
                    isArray={handle.isArray}
                    isOptional={handle.isOptional}
                />
            ))}
        </div>
    );
}

export default OutputNode;

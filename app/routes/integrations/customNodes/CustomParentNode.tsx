// import React from "react";
import { NodeResizer, useStore } from "reactflow";
import { getRelativeNodesBounds } from "~/routes/integrations/utils/utils";
import { HStack } from "@navikt/ds-react";
import CustomHandle from "~/routes/integrations/Handles/customHandle";
import HandleConfig, {
  handleConfigLeft,
  handleConfigsRight,
} from "~/routes/integrations/Handles/config";
import { memo } from "react";

interface NodeProps {
  id: string;
  selected: boolean;
  data: {
    label: string;
    inputType: string;
    icon: string;
  };
}

function CustomParentNode({ id, data, selected }: NodeProps) {
  const handlesLeft: HandleConfig[] =
    handleConfigLeft[data.inputType] || handleConfigLeft.default;
  const handlesRight: HandleConfig[] =
    handleConfigsRight[data.inputType] || null;

  const { minWidth, minHeight, parentHeight, parentWidth } = useStore(
    (store) => {
      const childNodes = Array.from(store.nodeInternals.values()).filter(
        (n) => n.parentId === id
      );

      const parentNode = store.nodeInternals.get(id);
      const rect = getRelativeNodesBounds(childNodes);

      if (childNodes.length === 0) {
        return {
          minWidth: 500,
          minHeight: 200,
          hasChildNodes: false,
          parentHeight: parentNode?.height,
          parentWidth: parentNode?.width,
        };
      }

      return {
        minWidth: Math.max(rect.x + rect.width, 500),
        minHeight: Math.max(rect.y + rect.height, 200),
        hasChildNodes: childNodes.length > 0,
        parentHeight: parentNode?.height,
        parentWidth: parentNode?.width,
      };
    }
  );

  return (
    <HStack
      className="flex border-black rounded-3xl border -z-50"
      style={{
        width: parentWidth ? parentWidth : 500,
        height: parentHeight ? parentHeight : 200,
      }}
    >
      <NodeResizer
        minHeight={minHeight + 20}
        minWidth={minWidth + 20}
        // onResize={onResize}
        lineStyle={{ borderColor: "black" }}
        isVisible={selected}
      />

      <div
        className="flex-col justify-center rounded-l-3xl z-10 bg-zinc-100 flex w-[40px]"
        style={{ 
          height: parentHeight ? parentHeight : 200 , 
          flexBasis: "40px" ,
          // backgroundColor: 'lightgray',
        }}
      >
        <span className="material-symbols-outlined p-2 absolute top-2">{data.icon}</span>

        {handlesLeft.map((handle: HandleConfig, index: number) => (
          <CustomHandle
            key={index}
            position={handle.position}
            labelText={handle.labelText}
            id={handle.id}
            icon={handle.icon}
            className={handle.className}
            isArray={handle.isArray}
          />
        ))}
      </div>

      <div
        className="flex-1 p-2"
        // style={{
        //     backgroundColor: 'white',
        // }}
      >
        {data.label}
        {/*({hasChildNodes ? 'has children' : 'no children'})*/}
        {/*(h: {parentHeight},  w: {parentWidth})*/}
      </div>

      {handlesRight?.map((handle: HandleConfig, index: number) => (
        <CustomHandle
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

      <div
        className="flex-none rounded-r-3xl bg-zinc-100"
        style={{
          flexBasis: "40px",
        }}
      ></div>
    </HStack>
  );
}

export default memo(CustomParentNode);
// export default CustomParentNode;

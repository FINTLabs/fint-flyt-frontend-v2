import React from "react";
import { Handle, Position } from "reactflow";
import { CustomHandle } from "../customHandles/customHandle";
import nodeConfig from "~/routes/integrations/nodes/config";
import CustomHandleCollection from "~/routes/integrations/customHandles/customHandleCollection";

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

const CustomObjectNode: React.FC<CustomNodeProps> = ({ data, selected }) => {
    const config = nodeConfig[data.inputType] || {};
    const componentHeight = 70 + (config.customHandles.right.length * 20) ;


  return (
      <div className={`flex justify-center ${selected ? 'border-black border' : ''}`}>
          {/*<div className="absolute z-10 bottom-full mb-2 text-center w-[100px]">*/}
          {/*    Åpne Objekt*/}
          {/*</div>*/}
          <div className="flex flex-row items-center">
              {/*<CustomHandle */}
              {/*    position={Position.Left} */}
              {/*    id="1"*/}
              {/*    labelText="Objekt"*/}
              {/*/>*/}
              {config.customHandles?.left.map(handle => (
                  <CustomHandleCollection
                      key={handle.id}
                      position={Position.Left}
                      id={handle.id}
                      icon={handle.icon}
                      labelText={handle.labelText}
                      isArray={handle.isArray}
                      isOptional={handle.isOptional}
                  />
              ))}
              <div
                  className="w-16 flex flex-col items-center justify-center bg-slate-300 rounded-xl border border-black"
                  style={{height: `${componentHeight}px`}}
              >
                  <img
                      src="../images/openObject.svg"
                      alt="åpne Objekt"
                      className="h-[50px]"
                  />
              </div>
              <div
                  // className="flex flex-col h-[90%] justify-between"
                  // style={{position: 'relative', height: `${componentHeight}px`}}
              >
                  {config.customHandles?.right.map(handle => (
                      <CustomHandleCollection
                          key={handle.id}
                          position={Position.Right}
                          id={handle.id}
                          icon={handle.icon}
                          labelText={handle.labelText}
                          className={handle.className}
                      />
                  ))}
              </div>
          </div>
      </div>
  );
}

export default CustomObjectNode;
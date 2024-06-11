import React from "react";
import nodeConfig from "~/routes/integrations/nodes/config";
import CustomHandle from "~/routes/integrations/customHandle";

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
    // const componentHeight = 70 + (config.customHandles.right.length * 20) ;
    // const componentHeight = (config.customHandles.right.length * 30) + 5;

    const rightHandlesLength = config.customHandles?.right?.length || 0;
    const leftHandlesLength = config.customHandles?.left?.length || 0;
    const maxHandlesLength = Math.max(rightHandlesLength, leftHandlesLength);
    const componentHeight = (maxHandlesLength * 30) + 5;


  return (
      <div className={`flex justify-center ${selected ? 'border-black border' : ''}`}>

          <div className="flex">

              <div >
                  <div className="flex pt-5">
                      {config.customHandles?.left.map((handle,index) => (
                          <CustomHandle
                              key={handle.id}
                              position={handle.position}
                              id={handle.id}
                              icon={handle.icon}
                              labelText={handle.labelText}
                              className={` top-[${index * 30}px] `}
                              isArray={handle.isArray}
                              isOptional={handle.isOptional}
                              // className={handle.className}
                          />
                      ))}
                  </div>
              </div>


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

              <div>
                  <div className="flex pt-5">
                  {config.customHandles?.right.map((handle,index) => (
                      <CustomHandle
                          key={handle.id}
                          position={handle.position}
                          id={handle.id}
                          icon={handle.icon}
                          labelText={handle.labelText}
                          className={` top-[${index * 30}px] `}
                          isArray={handle.isArray}
                            isOptional={handle.isOptional}
                          // className={handle.className}
                      />
                  ))}
                  </div>
              </div>



          </div>
      </div>
  );
}

export default CustomObjectNode;
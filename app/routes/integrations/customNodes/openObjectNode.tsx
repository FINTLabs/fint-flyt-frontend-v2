import React from "react";
import { Handle, Position } from "reactflow";
import { CustomHandle } from "./customHandle";

function openObjectNode({ data }) {
  const baseHeight = 70;
  const extraHeightPerHandle = 15;
  const padding = 14;

//   const componentHeight = data.sources.length < 4
//     ? baseHeight
//     : 100 + extraHeightPerHandle * (data.sources.length - 2);

const componentHeight = 70;
  const availableHeight = componentHeight - 2 * padding;
 const testdata = {
    sources: [
    { id: "0", name: "test", },
    { id: "1", name: "test1" },
    { id: "2", name: "test2" },
]}


  return (
    <div className="flex justify-center">
      <div className="absolute z-10 bottom-full mb-2 text-center w-[100px]">
        Åpne Objekt
      </div>
      <div className="flex flex-row items-center">
        <CustomHandle position={Position.Left} id="1" labelType="object" labelText="Objekt" />
        <div
          className="w-16 flex flex-col items-center justify-center bg-slate-300 rounded-xl border border-black"
          style={{ height: `${componentHeight}px` }}
        >
          <img
            src="../images/openObject.svg"
            alt="åpne Objekt"
            className="h-[50px]"
          />
        </div>
        <div
          className="flex flex-col h-[90%] justify-between"
          style={{ position: 'relative', height: `${componentHeight}px` }}
        >
          {testdata.sources.map((source, index) => (
            <Handle
              key={source.id}
              type="source"
              id={`source-${index}`}
              position={Position.Right}
              style={{
                top: `${padding + (index * availableHeight) / (testdata.sources.length - 1)}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default openObjectNode;
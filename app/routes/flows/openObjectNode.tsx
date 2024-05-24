import { Handle, Position } from "reactflow";
import { CustomHandle } from "./customHandles";

function openObjectNode({ data }) {
  const baseHeight = 70;
  const extraHeightPerHandle = 15;

  const componentHeight =
    data.sources.length < 4
      ? baseHeight
      : 100 + extraHeightPerHandle * (data.sources.length - 2);

  const padding = 14;
  const availableHeight = componentHeight - 2 * padding;

  return (
    <div className="flex justify-center">
      <div className="absolute z-10 bottom-full mb-2 text-center w-[100px]">
        Åpne Objekt
      </div>
      <div className="flex flex-row items-center">
      <CustomHandle position={Position.Left} id="1" labeltype="object" labeltext="Objekt"/>
        <div
          className="w-16 flex flex-col items-center justify-center bg-slate-300 rounded-xl border border-black"
          style={{ height: `${componentHeight}px` }}>
          <img
            src="../images/openObject.svg"
            alt="åpne Objekt"
            className="h-[50px]"
          />
        </div>
        <div className="flex flex-col h-[90%] justify-between" 
        style={{ position: 'relative', height: `${componentHeight}px` }}>
          {data.sources.map((x, i) => (
            <Handle
              key={i}
              type="source"
              id={`source-${i}`}
              position={Position.Right}
              style={{
                top: `${
                  padding + (i * availableHeight) / (data.sources.length - 1)
                }px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default openObjectNode;

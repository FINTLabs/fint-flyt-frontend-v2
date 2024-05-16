import { Handle, Position } from "reactflow";

function openObjectNode({ data }) {

    const componentHeight = 100 + (10 * data.sources.length);
    const sourceHeight = (componentHeight / data.sources.length) / 2 ;

  console.log("componentHeight = ", componentHeight);
  console.log("sourceHeight = ",sourceHeight);

//  const customAmountHandles = data.sources.map((data.sources) =>
//     for ( let i = 0; i > data.sources; i++ ) {
//     <Handle type="source" position={Position.Right} style={ top: {i*sourceHeight} } />
//     }
// );
return (
  <div className="flex justify-center">
  <div className="absolute z-10 bottom-full mb-2 text-center w-[200px]">Åpne Objekt</div>
  <div className="flex flex-row">
      <Handle type="target" position={Position.Left} />
      <div className="w-16 flex flex-col items-center justify-center bg-slate-300 rounded-xl border border-black" style={{ height: `${componentHeight}px` }}>
          <img
              src="../images/openObject.svg"
              alt="åpne Objekt"
              className="h-[50px]"
          />
          <p className="text-sm">modular</p>
      </div>
      <div className="flex flex-col h-[90%] justify-between">
      {data.sources.map(( x, i ) => (
          <Handle key={i} type="source" id={`sources-{i}`} position={Position.Right} style={{ top: `${(i + 1) * 16}%` }} />
      ))}
      </div>
  </div>
  </div>
);
}

export default openObjectNode;

// style={{ top: `${(i + 1) * sourceHeight}%` }}
import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  SmoothStepEdge,
  Controls,
  ReactFlowProvider,
} from "reactflow";

import "reactflow/dist/style.css";
import inputNode from "./inputNode";
import openObjectNode from "./openObjectNode";
import GenericNode from "./genericNode";

const nodeTypes = {
  generic: GenericNode,
  inputNode: inputNode,
  openObject: openObjectNode,

};

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 100 },
    data: { label: "1" },
    type: "inputNode",
  },
  {
    id: "2",
    position: { x: 270, y: 75 },
    data: { label: "2" },
    type: "generic",
  },
  {
    id: "3",
    position: { x: 300, y: 220 },
    data: {
      label: "3",
      sources: [
        { id: "0", name: "test" },
        { id: "1", name: "test1" },
        { id: "2", name: "test2" },
        { id: "3", name: "test3" },
        { id: "4", name: "test4" },
        { id: "5", name: "test5" },
      ],
    },
    type: "openObject",
  },
];

const initialEdges = [
  {
    id: "skjema_1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
  },
  {
    id: "skjema_1-3",
    source: "1",
    target: "3",
    type: "smoothstep",
  },
];

export default function index() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div
      style={{ width: "80vw", height: "80vh" }}
      className="border-2 bg-white"
    >
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        />
        <Controls />
      </ReactFlowProvider>
    </div>
  );
}

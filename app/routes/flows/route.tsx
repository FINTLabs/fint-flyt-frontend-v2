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

const nodeTypes = {
  inputNode: inputNode,
  openObject: openObjectNode,
};

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "1" },
    type: "inputNode",
  },
  {
    id: "2",
    position: { x: 300, y: 75 },
    data: { label: "2" },
    type: "openObject",
  },
];

const initialEdges = [
  {
    id: "skjema_1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
    label: "{ } Skjema",
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

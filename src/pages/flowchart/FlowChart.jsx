import React from "react";
import ReactFlow, { Handle } from "reactflow";
import "reactflow/dist/style.css";

// function FlowChart() {
//   return <div>FlowChart</div>;
// }

const nodes = [
  { id: "1", data: { label: "Step 1" }, position: { x: 0, y: 0 } },
  { id: "2", data: { label: "Step 2" }, position: { x: 0, y: 150 } },
  { id: "3", data: { label: "Step 3" }, position: { x: 250, y: 250 } },
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
 
];

const FlowChart = () => {
  return (
    <div className="bg-gray-200 h-dvh flex justify-center items-center">
      <div
        style={{ height: "250px", width: '100%' }}
        className="my-auto bg-white"
      >
        <ReactFlow nodes={nodes} edges={edges} fitView />
      </div>
    </div>
  );
};

export default FlowChart;

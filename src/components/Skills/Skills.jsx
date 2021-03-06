import React, { useState, Fragment } from "react";
import initialElements from "./initial-elements";

import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
} from "react-flow-renderer";
import "./Skills.scss";

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
};
const Skills = () => {
  const [elements, setElements] = useState(initialElements);
  const [name, setName] = useState("");

  const addNode = () => {
    setElements((e) =>
      e.concat({
        id: (e.length + 1).toString(),
        data: { label: `${name}` },
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      })
    );
  };

  const onConnect = (params) => setElements((e) => addEdge(params, e));

  return (
    <Fragment>
      <ReactFlow
        elements={elements}
        onLoad={onLoad}
        style={{ width: "100%", height: "90vh" }}
        onConnect={onConnect}
        connectionLineStyle={{ stroke: "#ddd", strokeWidth: 2 }}
        connectionLineType="bezier"
        snapToGrid={true}
        snapGrid={[16, 16]}
      >
        <Background color="#888" gap={16} />
        <MiniMap
          nodeColor={(n) => {
            if (n.type === "input") return "blue";

            return "#FFCC00";
          }}
        />
        <Controls />
      </ReactFlow>

      <div className="Skills">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="title"
          placeholder="Add New Node"
        />
        <button className="btn-custom" type="button" onClick={addNode}>
          Add Node
        </button>
      </div>
    </Fragment>
  );
};

export default Skills;

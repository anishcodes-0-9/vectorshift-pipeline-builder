import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div
      style={{
        width: 200,
        border: "1px solid #444",
        borderRadius: 8,
        padding: 10,
        background: "#1e1e1e",
        color: "white",
        fontSize: 12,
      }}
    >
      {/* Title */}
      <div
        style={{
          fontWeight: "bold",
          marginBottom: 8,
        }}
      >
        {title}
      </div>

      {/* Inputs */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      {/* Outputs */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      {/* Custom UI */}
      <div style={{ marginTop: 10 }}>{children}</div>
    </div>
  );
};

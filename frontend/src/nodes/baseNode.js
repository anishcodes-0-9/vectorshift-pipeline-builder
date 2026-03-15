import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div
      style={{
        minWidth: 220,
        border: "1px solid #e2e8f0",
        borderRadius: 12,
        padding: 12,
        background: "white",
        color: "#111827",
        fontSize: 13,
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontWeight: 600,
          marginBottom: 10,
          fontSize: 14,
        }}
      ></div>

      {/* Inputs */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 50 + index * 25 }}
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
      <div style={{ marginTop: 8 }}>{children}</div>
    </div>
  );
};

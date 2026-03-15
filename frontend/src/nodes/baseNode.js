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
        position: "relative",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontWeight: 600,
          marginBottom: 10,
          fontSize: 14,
        }}
      >
        {title}
      </div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <React.Fragment key={input}>
          <Handle
            type="target"
            position={Position.Left}
            id={input}
            style={{
              top: 50 + index * 25,
              background: "#2563eb",
              width: 10,
              height: 10,
              borderRadius: "50%",
            }}
          />

          {/* Input Label */}
          <div
            style={{
              position: "absolute",
              left: -55,
              top: 45 + index * 25,
              fontSize: 12,
              color: "#555",
            }}
          >
            {input}
          </div>
        </React.Fragment>
      ))}

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{
            top: 50 + index * 25,
            background: "#2563eb",
            width: 10,
            height: 10,
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Custom Node UI */}
      <div style={{ marginTop: 8 }}>{children}</div>
    </div>
  );
};

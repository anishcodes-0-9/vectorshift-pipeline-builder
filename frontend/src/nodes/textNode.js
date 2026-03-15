import React, { useState, useEffect } from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;

    const matches = [...text.matchAll(regex)];

    const vars = [...new Set(matches.map((match) => match[1]))];

    setVariables(vars);
  }, [text]);

  return (
    <BaseNode
      title="Text"
      inputs={variables.length ? variables : ["input"]}
      outputs={["text"]}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          minHeight: 60,
          padding: 6,
        }}
      />
    </BaseNode>
  );
};

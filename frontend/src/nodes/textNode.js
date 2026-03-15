import React, { useState } from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");

  return (
    <BaseNode title="Text" inputs={["input"]} outputs={["text"]}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};

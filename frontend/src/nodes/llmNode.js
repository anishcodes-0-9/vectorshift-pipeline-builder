import React from "react";
import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode title="LLM" inputs={["input"]} outputs={["response"]}>
      <div>GPT Processing Node</div>
    </BaseNode>
  );
};

import React from "react";
import { BaseNode } from "./baseNode";

export const DelayNode = ({ id, data }) => {
  return (
    <BaseNode title="Delay" inputs={["input"]} outputs={["output"]}>
      <div>Delays pipeline execution</div>
    </BaseNode>
  );
};

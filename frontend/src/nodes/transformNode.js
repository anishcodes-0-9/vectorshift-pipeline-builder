import React from "react";
import { BaseNode } from "./baseNode";

export const TransformNode = ({ id, data }) => {
  return (
    <BaseNode title="Transform" inputs={["input"]} outputs={["output"]}>
      <div>Transforms the data</div>
    </BaseNode>
  );
};

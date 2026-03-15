import React from "react";
import { BaseNode } from "./baseNode";

export const MathNode = ({ id, data }) => {
  return (
    <BaseNode title="Math" inputs={["a", "b"]} outputs={["result"]}>
      <div>Performs a math operation</div>
    </BaseNode>
  );
};

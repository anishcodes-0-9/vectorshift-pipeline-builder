import React from "react";
import { BaseNode } from "./baseNode";

export const APINode = ({ id, data }) => {
  return (
    <BaseNode title="API" inputs={["request"]} outputs={["response"]}>
      <div>Calls an external API</div>
    </BaseNode>
  );
};

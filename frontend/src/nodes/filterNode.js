import React from "react";
import { BaseNode } from "./baseNode";

export const FilterNode = ({ id, data }) => {
  return (
    <BaseNode title="Filter" inputs={["data"]} outputs={["filtered"]}>
      <div>Filters incoming data</div>
    </BaseNode>
  );
};

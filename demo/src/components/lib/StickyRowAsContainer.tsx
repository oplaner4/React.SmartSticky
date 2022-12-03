import React from "react";
import SmartSticky from "../../../../lib/src";
import { computeOffsetLeft } from "../../../../lib/src/utils/offsetComputer";

export const StickyRowAsContainer = ({ enabled, rowContainer }: { enabled: boolean; rowContainer: HTMLDivElement }) => {
  return (
    <SmartSticky
      container={rowContainer}
      fixed={{
        width: () => rowContainer.offsetWidth,
        left: () => computeOffsetLeft(rowContainer),
      }}
      enabled={enabled}
    >
      <h5>My sticky content 4 - row as container</h5>
    </SmartSticky>
  );
};

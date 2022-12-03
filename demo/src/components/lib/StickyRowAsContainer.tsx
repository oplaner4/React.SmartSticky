import { SmartSticky, computeOffsetLeft } from "@oplaner4/smart-sticky";

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

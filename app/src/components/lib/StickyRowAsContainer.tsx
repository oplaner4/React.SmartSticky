import SmartSticky from "../../../../lib/src";

export const StickyRowAsContainer = ({ enabled, rowContainer }: { enabled: boolean; rowContainer: HTMLDivElement }) => {
  return (
    <SmartSticky
      container={rowContainer}
      fixed={{
        width: rowContainer.offsetWidth,
        left: rowContainer.offsetLeft,
      }}
      enabled={enabled}
    >
      <h5>My sticky content 4 - row as container</h5>
    </SmartSticky>
  );
};

import { SmartSticky, computeOffsetLeft } from "@oplaner4/smart-sticky";
import './Sticky.css';

export const StickyRowAsContainer = ({ enabled, rowContainer }: { enabled: boolean; rowContainer: HTMLDivElement }) => {
  return (
    <SmartSticky
      elemProps={{
        className: 'bare',
      }}
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

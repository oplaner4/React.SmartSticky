import { SmartSticky, VerticalPlacement } from "@oplaner4/smart-sticky";
import './Sticky.css';

export const StickyFixedBottom = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      elemProps={{
        className: 'bare',
      }}
      show={{
        placement: VerticalPlacement.Bottom,
        scrolling: {
          down: false,
        },
      }}
      enabled={enabled}
    >
      <h5>My sticky content 2 - fixed bottom, visible when scrolling up, invisible when scrolling down</h5>
    </SmartSticky>
  );
};

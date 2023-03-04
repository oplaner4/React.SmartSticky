import { SmartSticky, VerticalPlacement } from "@oplaner4/smart-sticky";
import './Sticky.css';

export const StickyFixedToggle = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      elemProps={{
        className: 'bare',
      }}
      show={{
        placement: VerticalPlacement.Toggle,
      }}
      enabled={enabled}
    >
      <h5>My sticky content 3 - toggling: fixed top when scrolling down, fixed bottom when scrolling up</h5>
    </SmartSticky>
  );
};

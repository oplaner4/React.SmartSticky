import { SmartSticky } from "@oplaner4/smart-sticky";
import './Sticky.css';

export const StickyDelayed = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      elemProps={{
        className: 'bare',
      }}
      show={{
        delay: 600,
      }}
      enabled={enabled}
    >
      <h5>My sticky content 5 - delayed</h5>
    </SmartSticky>
  );
};

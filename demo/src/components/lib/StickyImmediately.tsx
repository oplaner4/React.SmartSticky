import { SmartSticky } from "@oplaner4/smart-sticky";
import './Sticky.css';

export const StickyImmediately = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      elemProps={{
        className: 'bare',
      }}
      show={{
        immediately: true,
      }}
      enabled={enabled}
    >
      <h5>
        My sticky content 13 - immediately
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
      </h5>
    </SmartSticky>
  );
};

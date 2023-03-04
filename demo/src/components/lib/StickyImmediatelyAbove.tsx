import { SmartSticky, VerticalPlacement } from "@oplaner4/smart-sticky";
import './Sticky.css';

export const StickyImmediatelyAbove = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      elemProps={{
        className: 'bare',
      }}
      show={{
        immediately: true,
        placement: VerticalPlacement.Bottom,
        original: {
          above: true,
        },
      }}
      enabled={enabled}
    >
      <h5>
        My sticky content 14 - immediately above
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

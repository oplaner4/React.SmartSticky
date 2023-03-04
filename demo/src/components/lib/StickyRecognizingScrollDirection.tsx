import { useState } from "react";
import { SmartSticky, VerticalPlacement } from "@oplaner4/smart-sticky";
import './Sticky.css';

export const StickyRecognizingScrollDirection = ({ enabled }: { enabled: boolean }) => {
  const [scrollingDown, setScollingDown] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);

  return (
    <SmartSticky
      elemProps={{
        className: active ?
          (scrollingDown ? 'bare text-danger' : 'bare text-success')
          :
          'bare',
      }}
      show={{
        placement: (scrollingDown: boolean) => {
          setScollingDown(scrollingDown);
          return VerticalPlacement.Bottom;
        },
      }}
      enabled={enabled}
      onDeactivated={() => {
        setActive(false);
      }}
      onActivated={() => {
        setActive(true);
      }}
    >
      <h5>My sticky content 9 - recognizing scroll direction</h5>
    </SmartSticky>
  );
};

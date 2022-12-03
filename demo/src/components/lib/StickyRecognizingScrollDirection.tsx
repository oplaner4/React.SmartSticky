import { useState } from "react";
import SmartSticky from "../../../../lib/src";
import { VerticalPosition } from "../../../../lib/src/SmartSticky.types";

export const StickyRecognizingScrollDirection = ({ enabled }: { enabled: boolean }) => {
  const [scrollingDown, setScollingDown] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);

  return (
    <SmartSticky
      elemProps={{
        className: active ? (scrollingDown ? "text-danger" : "text-success") : "",
      }}
      show={{
        placement: (scrollingDown: boolean) => {
          setScollingDown(scrollingDown);
          return VerticalPosition.Bottom;
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

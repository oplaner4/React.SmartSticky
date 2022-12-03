import SmartSticky from "../../../../lib/src";
import { VerticalPosition } from "../../../../lib/src/SmartSticky.types";

export const StickyFixedBottom = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      show={{
        placement: VerticalPosition.Bottom,
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

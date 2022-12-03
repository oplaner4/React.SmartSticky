import SmartSticky from "../../../../lib/src";
import { VerticalPosition } from "../../../../lib/src/SmartSticky.types";

export const StickyFixedToggle = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      show={{
        placement: VerticalPosition.Toggle,
      }}
      enabled={enabled}
    >
      <h5>My sticky content 3 - toggling: fixed top when scrolling down, fixed bottom when scrolling up</h5>
    </SmartSticky>
  );
};

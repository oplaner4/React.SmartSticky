import SmartSticky from "../../../../lib/src";
import { VerticalPosition } from "../../../../lib/src/SmartSticky.types";

export const StickyAboveOrigPosition = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      show={{
        placement: VerticalPosition.Bottom,
        original: {
          above: true,
        },
      }}
      enabled={enabled}
    >
      <h5>My sticky content 6 - visible above and under original position</h5>
    </SmartSticky>
  );
};

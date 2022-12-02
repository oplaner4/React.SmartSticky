import SmartSticky from "../../../../lib/src"
import { SmartStickyPosition } from "../../../../lib/src/SmartSticky.types";

export const StickyImmediatelyAbove = ({enabled}: { enabled: boolean }) => {
    return <SmartSticky 
        show={{
          immediately: true,
          fixed: SmartStickyPosition.Bottom,
          original: {
            above: true,
          }
        }}
        enabled={enabled}
  >
    <h5>My sticky content 14 - immediately above<br />content<br />content<br />content<br />content</h5>
  </SmartSticky>
};

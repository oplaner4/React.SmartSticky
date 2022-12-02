import SmartSticky from "../../../../lib/src"
import { SmartStickyPosition } from "../../../../lib/src/SmartSticky.types"

export const StickyAboveOrigPosition = ({enabled}: { enabled: boolean }) => {
    return <SmartSticky 
        show={{
          fixed: SmartStickyPosition.Bottom,
          original: {
            above: true
          },
        }}
        enabled={enabled}
  >
    <h5>My sticky content 6 - visible above and under original position</h5>
  </SmartSticky>
};

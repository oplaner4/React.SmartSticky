import SmartSticky from "../../../../lib/src"
import { SmartStickyPosition } from "../../../../lib/src/SmartSticky.types"

export const StickyFixedBottom = () => {
    return <SmartSticky 
        show={{
          fixed: SmartStickyPosition.Bottom,
          scrolling: {
            down: false,
          },
        }}
  >
    <h5>My sticky content 2 - fixed bottom, visible when scrolling up, invisible when scrolling down</h5>
  </SmartSticky>
};

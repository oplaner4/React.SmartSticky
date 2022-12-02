import SmartSticky from "../../../../lib/src"
import { SmartStickyPosition } from "../../../../lib/src/SmartSticky.types"

export const StickyFixedToggle = () => {
    return <SmartSticky 
        show={{
          fixed: SmartStickyPosition.Toggle,
        }}
  >
    <h5>My sticky content 3 - toggling: fixed top when scrolling down, fixed bottom when scrolling up</h5>
  </SmartSticky>
};

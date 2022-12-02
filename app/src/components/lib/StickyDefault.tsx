import SmartSticky from "../../../../lib/src"
import { SmartStickyPosition } from "../../../../lib/src/SmartSticky.types"

export const StickyDefault = () => {
    return <SmartSticky 
        show={{
          delay: 50,
          immediately: false,
          original: {
            under: true,
            above: false,
          },
          fixed: SmartStickyPosition.Top,
          scrolling: {
            up: true,
            down: true,
          },
        }}
        container={null}
        fixed={{
          width: null,
          left: null,
        }}
        enabled={true}
        onActivate={() => null}
        onDeactivate={() => null}
        onActivated={() => null}
        onDeactivated={() => null}
  >
    <h5>My sticky content 1 - default</h5>
  </SmartSticky>
};

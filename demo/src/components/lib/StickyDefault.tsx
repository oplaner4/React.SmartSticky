import { SmartSticky, VerticalPosition } from "@oplaner4/smart-sticky";

export const StickyDefault = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      show={{
        delay: 50,
        immediately: false,
        original: {
          under: true,
          above: false,
        },
        placement: VerticalPosition.Top,
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
      enabled={enabled}
      onActivate={() => null}
      onDeactivate={() => null}
      onActivated={() => null}
      onDeactivated={() => null}
    >
      <h5>My sticky content 1 - default</h5>
    </SmartSticky>
  );
};

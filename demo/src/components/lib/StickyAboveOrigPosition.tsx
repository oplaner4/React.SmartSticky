import { SmartSticky, VerticalPlacement } from "@oplaner4/smart-sticky";

export const StickyAboveOrigPosition = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      show={{
        placement: VerticalPlacement.Bottom,
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

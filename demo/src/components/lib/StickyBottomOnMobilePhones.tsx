import { SmartSticky, VerticalPlacement } from "@oplaner4/smart-sticky";

export const StickyBottomOnMobilePhones = ({ enabled }: { enabled: boolean }) => {
  const bound = 768;

  return (
    <SmartSticky show={{
      placement: () => {
        return window.innerWidth < bound ? VerticalPlacement.Bottom : VerticalPlacement.Top;
      },
      scrolling: {
        up: () => window.innerWidth < bound,
        down: () => window.innerWidth >= bound,
      },
    }}
    enabled={enabled}
    >
      <h5>My sticky content 10 - fixed bottom only on mobile phones, resize window to see effect</h5>
    </SmartSticky>
  );
};

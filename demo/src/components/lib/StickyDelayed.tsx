import { SmartSticky } from "@oplaner4/smart-sticky";

export const StickyDelayed = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      show={{
        delay: 600,
      }}
      enabled={enabled}
    >
      <h5>My sticky content 5 - delayed</h5>
    </SmartSticky>
  );
};

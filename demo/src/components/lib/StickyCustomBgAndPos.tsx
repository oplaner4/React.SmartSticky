import SmartSticky from "../../../../lib/src";

export const StickyCustomBgAndPos = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      elemProps={{ className: "bg-dark text-light p-2" }}
      show={{
        placement: (scrollingDown: boolean) => (scrollingDown ? { top: 100 } : { bottom: 200 }),
      }}
      enabled={enabled}
    >
      <h5>My sticky content 8 - custom background and position</h5>
    </SmartSticky>
  );
};

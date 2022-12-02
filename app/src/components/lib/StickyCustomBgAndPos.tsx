import SmartSticky from "../../../../lib/src"

export const StickyCustomBgAndPos = ({enabled}: { enabled: boolean }) => {
    return <SmartSticky divProps={{ className: "bg-dark text-light p-2" }}
        show={{
          fixed: (scrollingDown: boolean) => scrollingDown ? { top: 100 } : { bottom: 200 },
        }}
        enabled={enabled}
  >
    <h5>My sticky content 8 - custom background and position</h5>
  </SmartSticky>
};

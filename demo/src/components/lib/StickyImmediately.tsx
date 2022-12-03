import { SmartSticky } from "@oplaner4/smart-sticky";

export const StickyImmediately = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      show={{
        immediately: true,
      }}
      enabled={enabled}
    >
      <h5>
        My sticky content 13 - immediately
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
      </h5>
    </SmartSticky>
  );
};

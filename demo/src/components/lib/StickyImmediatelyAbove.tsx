import SmartSticky from "../../../../lib/src";
import { VerticalPosition } from "../../../../lib/src/SmartSticky.types";

export const StickyImmediatelyAbove = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky
      show={{
        immediately: true,
        placement: VerticalPosition.Bottom,
        original: {
          above: true,
        },
      }}
      enabled={enabled}
    >
      <h5>
        My sticky content 14 - immediately above
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

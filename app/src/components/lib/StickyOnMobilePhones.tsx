import React, { useEffect, useState } from "react";
import SmartSticky, { SmartStickyPartialOptions } from "../../../../lib/src";
import { SmartStickyPosition } from "../../../../lib/src/SmartSticky.types";

export const StickyOnMobilePhones = ({ enabled }: { enabled: boolean }) => {
  const bound = 768;

  const [props, setProps] = useState<SmartStickyPartialOptions>({
    show: {
      fixed: () => {
        return window.innerWidth < bound ? SmartStickyPosition.Bottom : SmartStickyPosition.Top;
      },
      scrolling: {
        up: window.innerWidth < bound,
        down: window.innerWidth >= bound
      }
    },
    enabled: enabled
  });

  useEffect(() => {
    setProps({ ...props });
  }, [window.innerWidth, enabled]);

  return (
    <SmartSticky {...props}>
      <h5>My sticky content 10 - fixed bottom only on mobile phones, resize window to see effect</h5>
    </SmartSticky>
  );
};

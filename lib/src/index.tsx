import React, { useEffect, useRef, useState } from 'react';
import {
  FixedPositionDeterminer,
  SmartStickyFixedOptions,
  SmartStickyPosition,
  SmartStickyShowOriginalOptions,
  SmartStickyShowScrollingOptions,
} from './SmartSticky.types';
import { getExtendedOptions } from './utils/optionsExtender';
import { MainManager } from './managers/mainManager';
import styles from './styles.module.css';
import { VerticalOffset } from 'managers/Managers.types';

export interface SmartStickyProps {
  show?: {
    delay?: number;
    immediately?: boolean;
    original?: Partial<SmartStickyShowOriginalOptions>;
    fixed?:
      | FixedPositionDeterminer
      | Partial<VerticalOffset>
      | SmartStickyPosition;
    scrolling?: Partial<SmartStickyShowScrollingOptions>;
  };
  container?: HTMLElement | null;
  fixed?: Partial<SmartStickyFixedOptions>;
  enabled?: boolean;
  onActivate?: () => void;
  onDeactivate?: () => void;
  onDeactivated?: () => void;
  onActivated?: () => void;
}

const SmartSticky = (
  props: React.PropsWithChildren<SmartStickyProps>
): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [manager, setManager] = useState<MainManager | null>(null);
  useEffect(() => {
    if (ref === null || ref.current === null) {
      return;
    }

    if (
      manager === null &&
      !ref.current.classList.contains(styles.smart_sticky)
    ) {
      setManager(
        new MainManager(ref.current, getExtendedOptions(props)).init()
      );
    } else if (manager !== null) {
      manager.destroy();
      setManager(
        new MainManager(ref.current, getExtendedOptions(props)).init()
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return <div ref={ref}>{props.children}</div>;
};

export default SmartSticky;

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

export interface SmartStickyPartialOptions {
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

export interface SmartStickyProps extends SmartStickyPartialOptions {
  divProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
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

    const options = getExtendedOptions(props as SmartStickyPartialOptions);

    if (
      manager === null &&
      options.enabled &&
      !ref.current.classList.contains(styles.smart_sticky)
    ) {
      setManager(new MainManager(ref.current, options).init());
    } else if (manager !== null) {
      manager.destroy();

      if (options.enabled) {
        setManager(new MainManager(ref.current, options).init());
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <div ref={ref} {...props.divProps}>
      {props.children}
    </div>
  );
};

export default SmartSticky;

import React, { useEffect, useRef, useState } from 'react';

import { getExtendedOptions } from './utils/optionsExtender';
import { MainManager } from './managers/mainManager';
import styles from './styles.module.css';
import { SmartStickyPartialOptions } from './SmartSticky.types';

export interface SmartStickyProps extends SmartStickyPartialOptions {
  as?: string;
  elemProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
}

const SmartSticky: React.FC<React.PropsWithChildren<SmartStickyProps>> = (
  props: React.PropsWithChildren<SmartStickyProps>
): JSX.Element => {
  const ref = useRef<HTMLElement>(null);
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

  return React.createElement(
    props.as ?? 'div',
    { ref, ...props.elemProps },
    props.children
  );
};

export default SmartSticky;

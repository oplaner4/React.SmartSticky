import {
  VerticalOffsetDeterminer,
  SmartStickyOptions,
  VerticalPlacement,
} from './SmartSticky.types';

export const defaults: SmartStickyOptions = {
  show: {
    delay: 50,
    immediately: false,
    original: {
      under: true,
      above: false,
    },
    placement: VerticalPlacement.Top,
    scrolling: {
      up: true,
      down: true,
    },
  },
  container: null,
  fixed: {
    width: null,
    left: null,
  },
  enabled: true,
  onActivate: () => null,
  onDeactivate: () => null,
  onActivated: () => null,
  onDeactivated: () => null,
};

export const identityAttributes = ['id', 'for', 'name'];

export const activeClass = 'active';

export const positions: Record<number, VerticalOffsetDeterminer> = {};

positions[VerticalPlacement.Top] = (_) => {
  return { top: 0 };
};

positions[VerticalPlacement.Bottom] = (_) => {
  return { bottom: 0 };
};

positions[VerticalPlacement.Toggle] = (scrollingDown) => {
  return scrollingDown ? VerticalPlacement.Top : VerticalPlacement.Bottom;
};

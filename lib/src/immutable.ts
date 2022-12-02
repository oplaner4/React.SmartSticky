import {
  FixedPositionDeterminer,
  SmartStickyOptions,
  SmartStickyPosition,
} from './SmartSticky.types';

export const defaults: SmartStickyOptions = {
  show: {
    delay: 50,
    immediately: false,
    original: {
      under: true,
      above: false,
    },
    fixed: SmartStickyPosition.Top,
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

export const noBackgroundCssValues = new Set([
  'rgba(0, 0, 0, 0)',
  'transparent',
  '',
]);

export const positions: Record<number, FixedPositionDeterminer> = {};

positions[SmartStickyPosition.Top] = (_) => {
  return { top: 0 };
};

positions[SmartStickyPosition.Bottom] = (_) => {
  return { bottom: 0 };
};

positions[SmartStickyPosition.Toggle] = (scrollingDown) => {
  return scrollingDown ? SmartStickyPosition.Top : SmartStickyPosition.Bottom;
};

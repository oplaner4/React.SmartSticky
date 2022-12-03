import {
  VerticalOffsetDeterminer,
  SmartStickyOptions,
  VerticalPosition,
} from './SmartSticky.types';

export const defaults: SmartStickyOptions = {
  show: {
    delay: 50,
    immediately: false,
    original: {
      under: true,
      above: false,
    },
    placement: VerticalPosition.Top,
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

export const identityAttributes = ['id', 'for', 'name'];

export const positions: Record<number, VerticalOffsetDeterminer> = {};

positions[VerticalPosition.Top] = (_) => {
  return { top: 0 };
};

positions[VerticalPosition.Bottom] = (_) => {
  return { bottom: 0 };
};

positions[VerticalPosition.Toggle] = (scrollingDown) => {
  return scrollingDown ? VerticalPosition.Top : VerticalPosition.Bottom;
};

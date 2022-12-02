import { VerticalOffset } from 'managers/Managers.types';

export interface SmartStickyShowOriginalOptions {
  under: boolean;
  above: boolean;
}

export interface SmartStickyShowScrollingOptions {
  up: boolean;
  down: boolean;
}

export type FixedPositionDeterminer = (
  scrollingDown: boolean
) => Partial<VerticalOffset> | SmartStickyPosition;

export interface SmartStickyShowOptions {
  delay: number;
  immediately: boolean;
  fixed:
    | FixedPositionDeterminer
    | Partial<VerticalOffset>
    | SmartStickyPosition;
  original: SmartStickyShowOriginalOptions;
  scrolling: SmartStickyShowScrollingOptions;
}

export interface SmartStickyFixedOptions {
  width: number | string | null;
  left: number | string | null;
}

export interface SmartStickyOptions {
  show: SmartStickyShowOptions;
  container: HTMLElement | null;
  fixed: SmartStickyFixedOptions;
  enabled: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  onDeactivated: () => void;
  onActivated: () => void;
}

export enum SmartStickyPosition {
  // eslint-disable-next-line no-unused-vars
  Top = 0,
  // eslint-disable-next-line no-unused-vars
  Bottom = 1,
  // eslint-disable-next-line no-unused-vars
  Toggle = 2,
}

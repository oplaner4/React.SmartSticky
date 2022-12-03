export type Determiner<T> = (
  /**
   * Window vertical scroll increases.
   */
  scrollingDown: boolean,
  /**
   * SmartSticky element.
   */
  elem: HTMLElement,

  /**
   * Offset container from options.
   */
  container: HTMLElement
) => T;

export interface VerticalOffset {
  /**
   * Value (in px) which moves element from the
   * top edge of window.
   */
  top: number;
  /**
   * Value (in px) which moves element from the
   * bottom edge of window. If 'top' is set, this
   * option is ignored.
   */
  bottom: number;
}

export type VerticalOffsetDeterminer = Determiner<
  Partial<VerticalOffset> | VerticalPosition
>;

export type CssOffsetValue = number | string | null;
export type HorizontalOffsetDeterminer = Determiner<CssOffsetValue>;

export interface ShowOriginalOptions {
  /**
   * Determines if the fixed element can be
   * be shown under its original position.
   * 'true' by default.
   */
  under: boolean;
  /**
   * Determines if the fixed element can be
   * be shown above its original position.
   * 'true' by default.
   */
  above: boolean;
}

export interface ShowScrollingOptions {
  /**
   * Determines if the fixed element can
   * be shown while scrolling up. 'true' by
   * default. If it is callback, its return
   * value is used.
   */
  up: boolean | Determiner<boolean>;
  /**
   * Determines if the fixed element can
   * be shown while scrolling down. 'true'
   * by default. If it is callback, its return
   * value is used.
   */
  down: boolean | Determiner<boolean>;
}

export interface ShowOptions {
  delay: number;
  immediately: boolean;
  placement:
    | VerticalOffsetDeterminer
    | Partial<VerticalOffset>
    | VerticalPosition;
  original: ShowOriginalOptions;
  scrolling: ShowScrollingOptions;
}

export interface FixedOptions {
  /**
   * Sets style 'width' property of the fixed element.
   * If it is callback, its return value is processed,
   * as further described. This should be used for properly
   * behaviour on window resize. If it is number, value in
   * px is supposed. If it is string, value is used directly.
   * If 'null' (default), element's offset width in the original
   * position is used.
   */
  width: CssOffsetValue | HorizontalOffsetDeterminer;
  /**
   * Sets style 'left' property of the fixed element.
   * If it is callback, its return value is processed,
   * as described further. This should be used for properly
   * behaviour on window resize. If it is number, value in px
   * is supposed. If it is string, value is used directly.
   * If 'null' (default), element's offset left in the original
   * position is used.
   */
  left: CssOffsetValue | HorizontalOffsetDeterminer;
}

export interface SmartStickyOptions {
  show: ShowOptions;
  container: HTMLElement | null;
  fixed: FixedOptions;
  enabled: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  onDeactivated: () => void;
  onActivated: () => void;
}

/**
 * Predefined vertical positions the fixed element
 * can have.
 */
export enum VerticalPosition {
  // eslint-disable-next-line no-unused-vars
  Top = 0,
  // eslint-disable-next-line no-unused-vars
  Bottom = 1,
  /**
   * Places element Top while scrolling down
   * and Bottom while 'scrolling up'. If used,
   * options 'show.scrolling.up' and 'show.scrolling.down'
   * should be set to 'true'.
   */
  // eslint-disable-next-line no-unused-vars
  Toggle = 2,
}

export interface SmartStickyPartialOptions {
  /**
   * Options connected with visibility
   * and vertical placement of the element.
   */
  show?: {
    /**
     * Value (in px) which postpones fixing of the element
     * and accelerates setting of the original position,
     * respectively. Use zero (default) to deactivate.
     */
    delay?: number;
    /**
     * Determines if the element becomes fixed immediately when
     * its original position is reached. If set to 'true' option
     * 'show.delay' is ignored. 'false' by default.
     */
    immediately?: boolean;
    /**
     * Options which specify visiblity of the element based on
     * the position of window relatively to the original position
     * of the element.
     */
    original?: Partial<ShowOriginalOptions>;
    /**
     * Specifies (vertical) placement of the fixed element.
     * If it is callback, its return value is processed.
     * 'VerticalPosition.Top' by default.
     */
    placement?:
      | VerticalOffsetDeterminer
      | Partial<VerticalOffset>
      | VerticalPosition;
    /**
     * Options which determine visibility of the element dependent
     * on the scroll direction.
     */
    scrolling?: Partial<ShowScrollingOptions>;
  };

  /**
   * Sets offset container. The fixed element is
   * visible only inside of container area. If
   * 'null' (default), the element's parent is used.
   */
  container?: HTMLElement | null;

  /**
   * Options which determine (horizontal) placement
   * of the element and its width.
   */
  fixed?: Partial<FixedOptions>;

  /**
   * Enables or disables whole functionality
   * of SmartSticky. 'true' by default.
   */
  enabled?: boolean;
  /**
   * Handler which is called when an element is
   * going to be fixed.
   */
  onActivate?: () => void;
  /**
   * Handler which is called when the original
   * position is going to be set.
   */
  onDeactivate?: () => void;

  /**
   * Handler which is called when the original
   * position has been set.
   */
  onDeactivated?: () => void;
  /**
   * Handler which is called when an element
   * has been fixed.
   */
  onActivated?: () => void;
}

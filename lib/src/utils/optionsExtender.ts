import { SmartStickyOptions } from '../SmartSticky.types';
import { defaults } from '../immutable';
import { SmartStickyPartialOptions } from '../index';

const extendAtomicProps = (
  res: SmartStickyOptions,
  props: SmartStickyPartialOptions
) => {
  if (typeof props.container !== 'undefined') {
    res.container = props.container;
  }

  if (typeof props.enabled !== 'undefined') {
    res.enabled = props.enabled;
  }

  if (typeof props.onActivate !== 'undefined') {
    res.onActivate = props.onActivate;
  }

  if (typeof props.onActivated !== 'undefined') {
    res.onActivated = props.onActivated;
  }

  if (typeof props.onDeactivate !== 'undefined') {
    res.onDeactivate = props.onDeactivate;
  }

  if (typeof props.onDeactivated !== 'undefined') {
    res.onDeactivated = props.onDeactivated;
  }
};

const extendFixedProps = (res: SmartStickyOptions, props: SmartStickyPartialOptions) => {
  if (typeof props.fixed === 'undefined') {
    return;
  }

  if (typeof props.fixed.left !== 'undefined') {
    res.fixed.left = props.fixed.left;
  }

  if (typeof props.fixed.width !== 'undefined') {
    res.fixed.width = props.fixed.width;
  }
};

const extendShowOriginalProps = (
  res: SmartStickyOptions,
  props: SmartStickyPartialOptions
) => {
  if (
    typeof props.show === 'undefined' ||
    typeof props.show.original === 'undefined'
  ) {
    return;
  }

  if (typeof props.show.original.above !== 'undefined') {
    res.show.original.above = props.show.original.above;
  }

  if (typeof props.show.original.under !== 'undefined') {
    res.show.original.under = props.show.original.under;
  }
};

const extendShowScrollingProps = (
  res: SmartStickyOptions,
  props: SmartStickyPartialOptions
) => {
  if (
    typeof props.show === 'undefined' ||
    typeof props.show.scrolling === 'undefined'
  ) {
    return;
  }

  if (typeof props.show.scrolling.down !== 'undefined') {
    res.show.scrolling.down = props.show.scrolling.down;
  }
  if (typeof props.show.scrolling.up !== 'undefined') {
    res.show.scrolling.up = props.show.scrolling.up;
  }
};

const extendShowProps = (res: SmartStickyOptions, props: SmartStickyPartialOptions) => {
  if (typeof props.show === 'undefined') {
    return;
  }

  if (typeof props.show.delay !== 'undefined') {
    res.show.delay = props.show.delay;
  }

  if (typeof props.show.immediately !== 'undefined') {
    res.show.immediately = props.show.immediately;
  }

  if (typeof props.show.fixed !== 'undefined') {
    res.show.fixed = props.show.fixed;
  }
};

export const getExtendedOptions = (
  props: SmartStickyPartialOptions
): SmartStickyOptions => {
  const res: SmartStickyOptions = {
    ...defaults,
    fixed: {
      ...defaults.fixed,
    },
    show: {
      ...defaults.show,
      original: {
        ...defaults.show.original,
      },
      scrolling: {
        ...defaults.show.scrolling,
      },
    },
  };
  extendAtomicProps(res, props);
  extendFixedProps(res, props);
  extendShowProps(res, props);
  extendShowOriginalProps(res, props);
  extendShowScrollingProps(res, props);
  return res;
};

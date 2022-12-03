import '@testing-library/jest-dom';
import { getExtendedOptions } from '../../utils/optionsExtender';
import { defaults } from '../../immutable';
import {
  SmartStickyPartialOptions,
  VerticalPosition,
} from '../../SmartSticky.types';

describe('utils/optionsExtender', () => {
  it('Uses all defaults', async () => {
    const options = getExtendedOptions({});
    expect(options).toStrictEqual(defaults);
  });

  it('Changes atomic property', async () => {
    const setValue = false;
    const options = getExtendedOptions({ enabled: setValue });
    const enabledBefore = defaults.enabled;
    defaults.enabled = setValue;
    expect(options).toStrictEqual(defaults);
    defaults.enabled = enabledBefore;
  });

  it('Changes deep property', async () => {
    const setValue = true;
    const options = getExtendedOptions({
      show: {
        immediately: setValue,
      },
    });
    const immediatelyBefore = defaults.show.immediately;
    defaults.show.immediately = setValue;
    expect(options).toStrictEqual(defaults);
    defaults.show.immediately = immediatelyBefore;
  });

  it('Changes all properties', async () => {
    const props: SmartStickyPartialOptions = {
      show: {
        delay: 10,
        immediately: true,
        original: {
          under: false,
          above: true,
        },
        placement: VerticalPosition.Bottom,
        scrolling: {
          up: false,
          down: false,
        },
      },
      container: document.body,
      fixed: {
        width: '10px',
        left: '30px',
      },
      enabled: false,
      onActivate: () => {
        console.log('Activate');
      },
      onDeactivate: () => {
        console.log('Deactivate');
      },
      onActivated: () => {
        console.log('Activated');
      },
      onDeactivated: () => {
        console.log('Deactivated');
      },
    };

    const options = getExtendedOptions(props);
    expect(options).toStrictEqual(props);
  });
});

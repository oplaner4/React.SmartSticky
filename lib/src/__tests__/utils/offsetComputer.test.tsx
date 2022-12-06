import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  computeOffsetLeft,
  computeOffsetTop,
} from '../../utils/offsetComputer';

const examinedElementText = 'examined';

describe('utils/offsetComputer', () => {
  it('Trivial', async () => {
    const { findByText } = render(<div>{examinedElementText}</div>);

    const elem = await findByText(examinedElementText);

    expect(elem).toBeTruthy();
    expect(computeOffsetLeft(elem)).toBe(0);
    expect(computeOffsetTop(elem)).toBe(0);
  });

  it('Trivial with padding', async () => {
    const paddingLeft = 70;
    const paddingTop = 110;

    const { findByText } = render(
      <div
        style={{
          paddingLeft: `${paddingLeft}px`,
          paddingTop: `${paddingTop}px`,
        }}
      >
        {examinedElementText}
      </div>
    );

    const elem = await findByText(examinedElementText);

    expect(elem).toBeTruthy();
    expect(computeOffsetLeft(elem)).toBe(paddingLeft);
    expect(computeOffsetTop(elem)).toBe(paddingTop);
  });

  it('Parent but not offset', async () => {
    const paddingLeft = 90;
    const paddingTop = 10;
    const { findByText } = render(
      <div
        style={{
          paddingLeft: `${paddingLeft}px`,
          paddingTop: `${paddingTop}px`,
        }}
      >
        <div
          style={{
            paddingLeft: `${paddingLeft}px`,
            paddingTop: `${paddingTop}px`,
          }}
        >
          {examinedElementText}
        </div>
      </div>
    );

    const elem = await findByText(examinedElementText);

    expect(elem).toBeTruthy();
    expect(computeOffsetLeft(elem)).toBe(paddingLeft);
    expect(computeOffsetTop(elem)).toBe(paddingTop);
  });

  it('One offset parent', async () => {
    const paddingLeft = 150;
    const paddingTop = 140;

    const { findByText } = render(
      <div
        style={{
          paddingLeft: `${paddingLeft}px`,
          paddingTop: `${paddingTop}px`,
        }}
      >
        <div
          style={{
            position: 'relative',
            paddingLeft: `${paddingLeft}px`,
            paddingTop: `${paddingTop}px`,
          }}
        >
          <div style={{ position: 'absolute' }}>{examinedElementText}</div>
        </div>
      </div>
    );

    const elem = await findByText(examinedElementText);

    expect(elem).toBeTruthy();
    expect(elem.offsetParent).toBeTruthy();
    expect(computeOffsetLeft(elem)).toBe(2 * paddingLeft);
    expect(computeOffsetTop(elem)).toBe(2 * paddingTop);
  });

  it('More offset parents', async () => {
    const paddingLeft = 60;
    const paddingTop = 50;

    const { findByText } = render(
      <div
        style={{
          paddingLeft: `${paddingLeft}px`,
          paddingTop: `${paddingTop}px`,
        }}
      >
        <div
          style={{
            position: 'relative',
            paddingLeft: `${paddingLeft}px`,
            paddingTop: `${paddingTop}px`,
          }}
        >
          <div
            style={{
              paddingLeft: `${paddingLeft}px`,
              paddingTop: `${paddingTop}px`,
            }}
          >
            <div
              style={{
                position: 'relative',
                paddingLeft: `${paddingLeft}px`,
                paddingTop: `${paddingTop}px`,
              }}
            >
              <div>{examinedElementText}</div>
            </div>
          </div>
        </div>
      </div>
    );

    const elem = await findByText(examinedElementText);

    expect(elem).toBeTruthy();
    expect(computeOffsetLeft(elem)).toBe(4 * paddingLeft);
    expect(computeOffsetTop(elem)).toBe(4 * paddingTop);
  });
});

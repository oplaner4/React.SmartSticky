import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SmartSticky from '../index';

const smartStickyRootClass = '.smart_sticky';

describe('SmartSticky', () => {
  it('Renders as div', async () => {
    const { findByText } = render(<SmartSticky></SmartSticky>);

    const sticky = await findByText('', {
      selector: `div${smartStickyRootClass}`,
    });

    expect(sticky).toBeTruthy();
    expect(sticky.tagName.toLowerCase()).toBe('div');
  });

  it('Renders as other element', async () => {
    const tag = 'nav';
    const { findByText } = render(<SmartSticky as={tag}></SmartSticky>);

    const sticky = await findByText('', {
      selector: `${tag}${smartStickyRootClass}`,
    });

    expect(sticky).toBeTruthy();
    expect(sticky.tagName.toLowerCase()).toBe(tag);
  });

  it('Adds custom attribute', async () => {
    const id = 'myid';
    const content = 'mycontent';

    const { findByText } = render(
      <SmartSticky elemProps={{ id }}>{content}</SmartSticky>
    );

    const sticky = await findByText(content, {
      selector: `${smartStickyRootClass}#${id}`,
    });

    expect(sticky).toBeTruthy();
    expect(sticky.id).toBe(id);
  });

  it('Renders children', async () => {
    const headlineText = 'title';
    const paragraphText = 'text';

    const { findByText } = render(
      <SmartSticky>
        <h3>{headlineText}</h3>
        <p>{paragraphText}</p>
      </SmartSticky>
    );

    const h = await findByText(headlineText, {
      selector: `${smartStickyRootClass} h3`,
    });
    const p = await findByText(paragraphText, {
      selector: `${smartStickyRootClass} p`,
    });

    expect(h).toBeTruthy();
    expect(p).toBeTruthy();
  });

  it('With disabled functionality', async () => {
    const content = 'hello';

    const { findByText } = render(
      <SmartSticky enabled={false}>{content}</SmartSticky>
    );

    const sticky = await findByText(content);
    expect(sticky).toBeTruthy();
    expect(sticky.classList.contains(smartStickyRootClass)).toBeFalsy();
  });
});

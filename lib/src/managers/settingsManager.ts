import { SmartStickyOptions } from './../SmartSticky.types';
import styles from '../styles.module.css';
import { computeOffsetLeft } from '../utils/offsetComputer';
import { identityAttributes } from '../immutable';
import { windowScrollingManager } from './scrollingManager';

export class SettingsManager {
  _options: SmartStickyOptions;
  _container: HTMLElement;
  _elem: HTMLElement;
  _placeholder: HTMLElement;

  constructor(options: SmartStickyOptions, elem: HTMLElement) {
    this._options = options;
    this._elem = elem;
    this._elem.classList.add(styles.smart_sticky);

    if (this._elem.parentElement === null) {
      // bad, should not happen
      throw new Error(
        'Unable to initialize SmartSticky. Element does not have parent.'
      );
    }

    this._container =
      options.container == null ? this._elem.parentElement : options.container;
    this._container.classList.add(styles.smart_sticky_container);

    this._placeholder = elem.cloneNode(true) as HTMLElement;
    this._placeholder.classList.add(styles.smart_sticky_placeholder);
    this._placeholder.classList.remove(styles.smart_sticky);
    this._placeholder.style.left = '';
    this._placeholder.style.width = '';
    this._placeholder.style.top = '';
    this._placeholder.style.bottom = '';
    this.removeIdentityAttributes(this._placeholder);
    this._elem.parentElement.insertBefore(this._placeholder, this._elem);
  }

  private removeIdentityAttributes(root: Element) {
    identityAttributes.forEach((attr) => {
      root.removeAttribute(attr);
    });

    for (let i = 0; i < root.children.length; i++) {
      this.removeIdentityAttributes(root.children[i]);
    }
  }

  getElement() {
    return this._elem;
  }

  getOptions() {
    return this._options;
  }

  getContainer() {
    return this._container;
  }

  getFixedLeft() {
    let l = this.getOptions().fixed.left;

    if (typeof l === 'function') {
      l = l(
        windowScrollingManager.scrollingDown(),
        this.getElement(),
        this.getContainer()
      );
    }

    if (typeof l === 'string') {
      return l;
    }

    if (l === null) {
      l = computeOffsetLeft(this.getElement());
    }

    return `${l}px`;
  }

  getFixedWidth() {
    let w = this.getOptions().fixed.width;

    if (typeof w === 'function') {
      w = w(
        windowScrollingManager.scrollingDown(),
        this.getElement(),
        this.getContainer()
      );
    }

    if (typeof w === 'string') {
      return w;
    }

    if (w === null) {
      w = this.getElement().offsetWidth;
    }

    return `${w}px`;
  }

  getPlaceholder() {
    return this._placeholder;
  }

  preparePlaceholder() {
    this.getPlaceholder().style.height = `${this.getElement().offsetHeight}px`;
    return this;
  }
}

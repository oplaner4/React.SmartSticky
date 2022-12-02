import { computeOffsetLeft } from './../utils/offsetComputer';
import { SmartStickyOptions } from './../SmartSticky.types';
import styles from '../styles.module.css';

export class SettingsManager {
  _options: SmartStickyOptions;
  _container: HTMLElement;
  _elem: HTMLDivElement;
  _placeholder: HTMLDivElement;

  constructor(options: SmartStickyOptions, elem: HTMLDivElement) {
    this._options = options;
    this._elem = elem;
    this._elem.classList.add(styles.smart_sticky);

    this._container =
      options.container == null
        ? (elem.parentElement as HTMLElement)
        : options.container;

    this._container.classList.add(styles.smart_sticky_container);

    this._placeholder = elem.cloneNode(true) as HTMLDivElement;
    this._placeholder.removeAttribute('id');
    this._placeholder.classList.add(styles.smart_sticky_placeholder);
    this._placeholder.classList.remove(styles.smart_sticky);

    if (this._elem.parentElement !== null) {
      this._elem.parentElement.insertBefore(this._placeholder, this._elem);
    }

    /* $('label', self._placeholder).removeAttr('for');
      $('input, select, textarea', self._placeholder)
        .removeAttr('name')
        .removeAttr('id'); */
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

    if (w === null) {
      w = this._placeholder.clientWidth;
    }

    return `${w}px`;
  }

  getPlaceholder() {
    return this._placeholder;
  }

  preparePlaceholder() {
    this.getPlaceholder().style.height = this.getElement().style.height;
    return this;
  }
}

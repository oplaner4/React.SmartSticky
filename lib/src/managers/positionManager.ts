import { computeOffsetTop } from './../utils/offsetComputer';
import { windowScrollingManager } from './scrollingManager';
import { positions } from '../immutable';
import { VerticalOffset } from './Managers.types';
import { VerticalOffsetManager } from './verticalOffsetManager';
import { SettingsManager } from './settingsManager';
import styles from '../styles.module.css';

export class PositionManager {
  _settingsManagerInstance: SettingsManager;
  _verticalOffsetManagerInstance!: VerticalOffsetManager;

  constructor(settingsManagerInstance: SettingsManager) {
    this._settingsManagerInstance = settingsManagerInstance;
    this.prepareFixedPosition();
  }

  getSettingsManager() {
    return this._settingsManagerInstance;
  }

  getVerticalOffsetManager() {
    return this._verticalOffsetManagerInstance;
  }

  setOrigPosition() {
    const elem = this.getSettingsManager().getElement();
    elem.classList.remove(styles.smart_sticky_active);

    elem.style.left = `${this.getSettingsManager()
      .getPlaceholder()
      .offsetLeft.toString()}px`;
    elem.style.width = `${this.getSettingsManager()
      .getPlaceholder()
      .offsetWidth.toString()}px`;
    elem.style.bottom = 'auto';
    elem.style.top = this.getSettingsManager()
      .getPlaceholder()
      .offsetTop.toString();

    return this;
  }

  recalculateFixedPosition() {
    const elem = this.getSettingsManager().getElement();
    elem.style.top = this.getVerticalOffsetManager().getFromTop().toString();
    elem.style.bottom = this.getVerticalOffsetManager()
      .getFromBottom()
      .toString();
    return this;
  }

  getOrigOffsetTop() {
    return this.getSettingsManager().getPlaceholder().offsetTop;
  }

  outOfOrigPositionAbove() {
    if (!this.getSettingsManager().getOptions().show.original.above) {
      return false;
    }

    return (
      this.getOrigOffsetTop() -
        window.innerHeight +
        (this.getSettingsManager().getOptions().show.immediately
          ? this.getSettingsManager().getPlaceholder().offsetHeight
          : -1 * this.getSettingsManager().getOptions().show.delay) >
      windowScrollingManager.getCurrentScrollTop()
    );
  }

  outOfOrigPositionUnder() {
    if (!this.getSettingsManager().getOptions().show.original.under) {
      return false;
    }

    return (
      this.getOrigOffsetTop() +
        (this.getSettingsManager().getOptions().show.immediately
          ? 0
          : this.getSettingsManager().getPlaceholder().offsetHeight +
            this.getSettingsManager().getOptions().show.delay) <
      windowScrollingManager.getCurrentScrollTop()
    );
  }

  outOfOrigPosition() {
    return this.outOfOrigPositionAbove() || this.outOfOrigPositionUnder();
  }

  outOfContainerAbove() {
    return (
      windowScrollingManager.getCurrentScrollTop() +
        (this.getVerticalOffsetManager().isCalculatedFromTop()
          ? (this.getVerticalOffsetManager().getFromTop() as number)
          : window.innerHeight -
            this.getSettingsManager().getElement().offsetHeight -
            (this.getVerticalOffsetManager().getFromBottom() as number)) <
      this.getSettingsManager().getContainer().offsetTop
    );
  }

  outOfContainerUnder() {
    return (
      windowScrollingManager.getCurrentScrollTop() +
        (this.getVerticalOffsetManager().isCalculatedFromTop()
          ? this.getSettingsManager().getElement().offsetHeight +
            (this.getVerticalOffsetManager().getFromTop() as number)
          : window.innerHeight -
            (this.getVerticalOffsetManager().getFromBottom() as number)) >
      computeOffsetTop(this.getSettingsManager().getContainer()) +
        this.getSettingsManager().getContainer().offsetHeight
    );
  }

  outOfContainer() {
    return this.outOfContainerAbove() || this.outOfContainerUnder();
  }

  canBeShownDueToScrolling() {
    if (windowScrollingManager.scrollingDown()) {
      if (this.getSettingsManager().getOptions().show.scrolling.down) {
        return true;
      }
    } else if (this.getSettingsManager().getOptions().show.scrolling.up) {
      return true;
    }

    return false;
  }

  prepareFixedPosition() {
    let p = this.getSettingsManager().getOptions().show.fixed;

    if (typeof p === 'function') {
      p = p(windowScrollingManager.scrollingDown());
    }

    while (typeof p === 'number' && p in positions) {
      p = positions[p](windowScrollingManager.scrollingDown());
    }

    this._verticalOffsetManagerInstance = new VerticalOffsetManager(
      p as Partial<VerticalOffset>
    );
    return this;
  }
}

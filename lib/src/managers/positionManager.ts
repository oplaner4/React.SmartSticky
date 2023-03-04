import { computeOffsetTop } from './../utils/offsetComputer';
import { windowScrollingManager } from './scrollingManager';
import { activeClass, positions } from '../immutable';
import { VerticalOffset } from '../SmartSticky.types';
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
    elem.classList.remove(styles.smart_sticky_active, activeClass);

    elem.style.left = `${
      this.getSettingsManager().getPlaceholder().offsetLeft
    }px`;
    elem.style.width = `${
      this.getSettingsManager().getPlaceholder().offsetWidth
    }px`;
    elem.style.bottom = 'auto';
    elem.style.top = `${
      this.getSettingsManager().getPlaceholder().offsetTop
    }px`;

    return this;
  }

  recalculateFixedPosition() {
    const elem = this.getSettingsManager().getElement();

    if (this.getVerticalOffsetManager().isCalculatedFromTop()) {
      elem.style.top = `${this.getVerticalOffsetManager().getFromTop()}px`;
      elem.style.bottom = 'auto';
    } else {
      elem.style.top = 'auto';
      elem.style.bottom = `${this.getVerticalOffsetManager().getFromBottom()}px`;
    }
    return this;
  }

  outOfOrigPosition() {
    return this.outOfOrigPositionAbove() || this.outOfOrigPositionUnder();
  }

  outOfContainer() {
    return this.outOfContainerAbove() || this.outOfContainerUnder();
  }

  canBeShownDueToScrolling() {
    if (windowScrollingManager.scrollingDown()) {
      let down = this.getSettingsManager().getOptions().show.scrolling.down;

      if (typeof down === 'function') {
        down = down(
          windowScrollingManager.scrollingDown(),
          this.getSettingsManager().getElement(),
          this.getSettingsManager().getContainer()
        );
      }

      return down;
    }

    let up = this.getSettingsManager().getOptions().show.scrolling.up;

    if (typeof up === 'function') {
      up = up(
        windowScrollingManager.scrollingDown(),
        this.getSettingsManager().getElement(),
        this.getSettingsManager().getContainer()
      );
    }

    return up;
  }

  prepareFixedPosition() {
    let p = this.getSettingsManager().getOptions().show.placement;

    if (typeof p === 'function') {
      p = p(
        windowScrollingManager.scrollingDown(),
        this.getSettingsManager().getElement(),
        this.getSettingsManager().getContainer()
      );
    }

    while (typeof p === 'number' && p in positions) {
      p = positions[p](
        windowScrollingManager.scrollingDown(),
        this.getSettingsManager().getElement(),
        this.getSettingsManager().getContainer()
      );
    }

    this._verticalOffsetManagerInstance = new VerticalOffsetManager(
      p as Partial<VerticalOffset>
    );
    return this;
  }

  private getOrigOffsetTop() {
    return computeOffsetTop(this.getSettingsManager().getPlaceholder());
  }

  private outOfOrigPositionAbove() {
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

  private outOfOrigPositionUnder() {
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

  private outOfContainerAbove() {
    return (
      windowScrollingManager.getCurrentScrollTop() +
        (this.getVerticalOffsetManager().isCalculatedFromTop()
          ? this.getVerticalOffsetManager().getFromTop()
          : window.innerHeight -
            this.getSettingsManager().getElement().offsetHeight -
            (this.getVerticalOffsetManager().getFromBottom() as number)) <
      computeOffsetTop(this.getSettingsManager().getContainer())
    );
  }

  private outOfContainerUnder() {
    return (
      windowScrollingManager.getCurrentScrollTop() +
        (this.getVerticalOffsetManager().isCalculatedFromTop()
          ? this.getSettingsManager().getElement().offsetHeight +
            this.getVerticalOffsetManager().getFromTop()
          : window.innerHeight -
            this.getVerticalOffsetManager().getFromBottom()) >
      computeOffsetTop(this.getSettingsManager().getContainer()) +
        this.getSettingsManager().getContainer().offsetHeight
    );
  }
}

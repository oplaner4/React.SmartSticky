import { SmartStickyOptions } from './../SmartSticky.types';
import { PositionManager } from './positionManager';
import { SettingsManager } from './settingsManager';
import styles from '../styles.module.css';
import { noBackgroundCssValues } from '../immutable';

export class MainManager {
  _settingsManagerInstance: SettingsManager;
  _positionManagerInstance: PositionManager;
  _windowOnResize!: () => void;
  _windowOnScroll!: () => void;
  _initialized: boolean = false;

  constructor(elem: HTMLDivElement, options: SmartStickyOptions) {
    this._settingsManagerInstance = new SettingsManager(options, elem);
    this._positionManagerInstance = new PositionManager(
      this.getSettingsManager()
    );
  }

  destroy() {
    this.getSettingsManager().getPlaceholder().remove();
    this.getSettingsManager()
      .getElement()
      .classList.remove(styles.smart_sticky);

    if (this._initialized) {
      removeEventListener('scroll', this._windowOnScroll);
      removeEventListener('resize', this._windowOnResize);
    }

    return this;
  }

  init() {
    const self = this;

    this._windowOnScroll = () => {
      self.adjustToCurrentScrollTop();
    };
    addEventListener('scroll', this._windowOnScroll);

    this._windowOnResize = () => {
      self.getPositionManager().setOrigPosition();
      self.getSettingsManager().preparePlaceholder();
    };

    addEventListener('resize', this._windowOnResize);
    this._windowOnResize();

    this._initialized = true;
    return this;
  }

  getPositionManager() {
    return this._positionManagerInstance;
  }

  getSettingsManager() {
    return this._settingsManagerInstance;
  }

  private adjustToCurrentScrollTop() {
    if (this.getPositionManager().outOfOrigPosition()) {
      if (!this.activated()) {
        this.activate();
      }

      if (this.getPositionManager().prepareFixedPosition().outOfContainer()) {
        this.hide();
      } else if (this.getPositionManager().canBeShownDueToScrolling()) {
        this.getSettingsManager()
          .getElement()
          .classList.remove(styles.smart_sticky_invisible);
        this.getPositionManager().recalculateFixedPosition();
      } else {
        this.hide();
      }
    } else if (this.activated()) {
      this.deactivate();
    }

    return this;
  }

  private hide() {
    this.getSettingsManager()
      .getElement()
      .classList.add(styles.smart_sticky_invisible);
    return this;
  }

  private deactivate() {
    this.getSettingsManager().getOptions().onDeactivate();
    this.getPositionManager().setOrigPosition();
    this.getSettingsManager().getOptions().onDeactivated();
    return this;
  }

  private activate() {
    const elem = this.getSettingsManager().preparePlaceholder().getElement();
    elem.classList.remove(styles.smart_sticky_background);
    elem.style.left = this.getSettingsManager().getFixedLeft();
    elem.style.width = this.getSettingsManager().getFixedWidth().toString();

    this.getSettingsManager().getOptions().onActivate();
    elem.classList.add(styles.smart_sticky_active);
    this.getSettingsManager().getOptions().onActivated();

    if (
      noBackgroundCssValues.has(
        this.getSettingsManager().getElement().style.backgroundColor
      )
    ) {
      this.getSettingsManager()
        .getElement()
        .classList.add(styles.smart_sticky_background);
    }

    return this;
  }

  private activated() {
    return this.getSettingsManager()
      .getElement()
      .classList.contains(styles.smart_sticky_active);
  }
}

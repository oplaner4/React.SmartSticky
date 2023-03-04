import { SmartStickyOptions } from './../SmartSticky.types';
import { PositionManager } from './positionManager';
import { SettingsManager } from './settingsManager';
import styles from '../styles.module.css';
import { activeClass } from 'immutable';

export class MainManager {
  _settingsManagerInstance: SettingsManager;
  _positionManagerInstance: PositionManager;
  _windowOnResize!: () => void;
  _windowOnScroll!: () => void;
  _initialized: boolean = false;

  constructor(elem: HTMLElement, options: SmartStickyOptions) {
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

    self._windowOnScroll = () => {
      self.adjustToCurrentScrollTop();
    };

    self._windowOnResize = () => {
      self.getPositionManager().setOrigPosition();
      self.getSettingsManager().preparePlaceholder();

      if (
        self.getSettingsManager().getElement() instanceof
        HTMLTableSectionElement
      ) {
        self.adjustTableHeader();
      }

      self._windowOnScroll();
    };

    addEventListener('resize', self._windowOnResize);
    addEventListener('scroll', self._windowOnScroll);
    self._windowOnResize();

    self._initialized = true;
    return self;
  }

  getPositionManager() {
    return this._positionManagerInstance;
  }

  getSettingsManager() {
    return this._settingsManagerInstance;
  }

  private adjustTableHeader() {
    const placeholder = this.getSettingsManager().getPlaceholder();
    const elem = this.getSettingsManager().getElement();

    for (let rowInx = 0; rowInx < elem.children.length; rowInx++) {
      const elemThs = elem.children[rowInx].children;
      const placeholderThs = placeholder.children[rowInx].children;

      for (let i = 0; i < elemThs.length; i++) {
        const elemTh = elemThs[i] as HTMLTableCaptionElement;
        const placeholderTh = placeholderThs[i] as HTMLTableCaptionElement;
        elemTh.style.width = `${placeholderTh.offsetWidth}px`;
      }
    }
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
    elem.style.left = this.getSettingsManager().getFixedLeft();
    elem.style.width = this.getSettingsManager().getFixedWidth().toString();

    this.getSettingsManager().getOptions().onActivate();
    elem.classList.add(styles.smart_sticky_active, activeClass);
    this.getSettingsManager().getOptions().onActivated();

    return this;
  }

  private activated() {
    return this.getSettingsManager()
      .getElement()
      .classList.contains(activeClass);
  }
}

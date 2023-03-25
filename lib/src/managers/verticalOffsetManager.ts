import { VerticalOffset } from '../SmartSticky.types';

export class VerticalOffsetManager {
  _verticalOffset: Partial<VerticalOffset>;

  constructor(offset: Partial<VerticalOffset>) {
    this._verticalOffset = offset;

    if (!this.isCalculatedFromTop() && !this.isCalculatedFromBottom()) {
      this._verticalOffset.top = 0;
    }
  }

  isCalculatedFromTop() {
    return 'top' in this._verticalOffset;
  }

  isCalculatedFromBottom() {
    return 'bottom' in this._verticalOffset;
  }

  getFromTop() {
    return this.isCalculatedFromTop()
      ? (this._verticalOffset.top as number)
      : 0;
  }

  getFromBottom() {
    return this.isCalculatedFromTop()
      ? 0
      : (this._verticalOffset.bottom as number);
  }
}

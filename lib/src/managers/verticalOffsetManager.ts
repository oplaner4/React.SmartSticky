import { VerticalOffset } from './Managers.types';

export class VerticalOffsetManager {
  _verticalOffset: Partial<VerticalOffset>;

  constructor(offset: Partial<VerticalOffset>) {
    this._verticalOffset = offset;
  }

  isCalculatedFromTop() {
    return 'top' in this._verticalOffset;
  }

  getFromTop() {
    return this.isCalculatedFromTop()
      ? (this._verticalOffset.top as number)
      : 'auto';
  }

  getFromBottom() {
    return this.isCalculatedFromTop()
      ? 'auto'
      : (this._verticalOffset.bottom as number);
  }
}

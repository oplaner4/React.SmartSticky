class ScrollingManager {
  _lastScrollTop: number = 0;
  _lastScrollingDown: boolean = true;

  scrollingDown() {
    if (this._lastScrollTop === this.getCurrentScrollTop()) {
      return this._lastScrollingDown;
    }

    this._lastScrollingDown = this._lastScrollTop < this.getCurrentScrollTop();
    this._lastScrollTop = this.getCurrentScrollTop();
    return this._lastScrollingDown;
  }

  getCurrentScrollTop() {
    return window.scrollY;
  }
}

export const windowScrollingManager = new ScrollingManager();

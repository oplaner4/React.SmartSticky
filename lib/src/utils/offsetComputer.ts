const computeOffset = (elem: HTMLElement, top: boolean): number => {
  let res = 0;
  let current = elem.offsetParent as HTMLElement | null;

  while (current !== null) {
    res += top ? current.offsetTop : current.offsetLeft;
    current = current.offsetParent as HTMLElement | null;
  }

  return res;
};

export const computeOffsetLeft = (elem: HTMLElement): number => {
  return computeOffset(elem, false);
};

export const computeOffsetTop = (elem: HTMLElement): number => {
  return computeOffset(elem, true);
};

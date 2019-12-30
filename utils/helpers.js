export const getSectionOuterHeight = el => {
  const componentEl = el.childNodes[0]; // component is first child of ref div
  const height = componentEl.offsetHeight;
  const { marginTop, marginBottom } = window.getComputedStyle(componentEl);
  return height + parseInt(marginTop) + parseInt(marginBottom);
};

export const getSectionInView = (sections, scrollOffset) => {
  let newActive = -1;
  sections.forEach((section, index) => {
    if (section) {
      const belowTop = window.scrollY > section.top - scrollOffset;
      const aboveBottom =
        window.scrollY < section.top + section.height - scrollOffset;
      if (belowTop && aboveBottom) {
        newActive = index;
      }
    }
  });
  return newActive;
};

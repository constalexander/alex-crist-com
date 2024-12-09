export const scrollIntoView = (id: string, offset = 0) => {
  const el = document.getElementById(id);
  if (el) {
    el.style.scrollMarginTop = offset + 'px';
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

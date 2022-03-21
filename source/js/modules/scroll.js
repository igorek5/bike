export const scrollMenu = (href) => {
  const speed = 0.25;

  const anchor = document.querySelector(href);
  const coordAnchor = anchor.getBoundingClientRect().top;
  const windowY = window.pageYOffset;
  let start = null;

  requestAnimationFrame(step);

  function step(time) {
    if (start === null) {
      start = time;
    }
    let progress = time - start;

    let coordY =
      coordAnchor < 0
        ? Math.max(windowY - progress / speed, windowY + coordAnchor)
        : Math.min(windowY + progress / speed, windowY + coordAnchor);

    window.scrollTo(0, coordY);
    if (coordY !== windowY + coordAnchor) {
      requestAnimationFrame(step);
    }
  }
};

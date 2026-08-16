(() => {
  const trigger = document.querySelector('.location-trigger');
  const map = document.querySelector('.location-map');
  const close = document.querySelector('.map-close');
  const frame = map?.querySelector('iframe');
  if (!trigger || !map || !close || !frame) return;

  const hide = () => {
    map.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  };

  trigger.addEventListener('click', () => {
    if (!map.hidden) return hide();
    if (!frame.src) frame.src = frame.dataset.src;
    map.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    close.focus();
  });
  close.addEventListener('click', hide);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !map.hidden) hide();
  });
})();

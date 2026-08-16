(() => {
  const refs = [...document.querySelectorAll('.note-ref[data-note]')];
  if (!refs.length) return;

  const popover = document.createElement('aside');
  popover.className = 'note-popover';
  popover.id = 'active-note';
  popover.setAttribute('role', 'note');
  popover.hidden = true;
  document.body.appendChild(popover);

  let active = null;

  function closeNote() {
    if (active) active.setAttribute('aria-expanded', 'false');
    active = null;
    popover.hidden = true;
    popover.textContent = '';
  }

  function positionNote(ref) {
    if (window.matchMedia('(max-width: 36rem)').matches) return;
    const rect = ref.getBoundingClientRect();
    const width = popover.offsetWidth;
    const left = Math.max(16, Math.min(window.innerWidth - width - 16, rect.left + rect.width / 2 - width / 2));
    const top = Math.min(window.innerHeight - popover.offsetHeight - 16, rect.bottom + 10);
    popover.style.left = `${left}px`;
    popover.style.top = `${Math.max(16, top)}px`;
  }

  refs.forEach((ref, index) => {
    ref.setAttribute('aria-expanded', 'false');
    ref.setAttribute('aria-controls', popover.id);
    if (!ref.getAttribute('aria-label')) ref.setAttribute('aria-label', `Note ${index + 1}`);

    ref.addEventListener('click', event => {
      event.stopPropagation();
      if (active === ref) {
        closeNote();
        return;
      }
      closeNote();
      active = ref;
      ref.setAttribute('aria-expanded', 'true');
      popover.textContent = ref.dataset.note;
      popover.hidden = false;
      positionNote(ref);
    });
  });

  popover.addEventListener('click', event => event.stopPropagation());
  document.addEventListener('click', closeNote);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const ref = active;
      closeNote();
      if (ref) ref.focus();
    }
  });
  window.addEventListener('resize', () => active && positionNote(active));
  window.addEventListener('scroll', closeNote, { passive: true });
})();

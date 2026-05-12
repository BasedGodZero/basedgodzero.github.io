(() => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const header = document.querySelector('.site-header');
  if (!toggle || !header) return;

  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    if (!open) {
      header.querySelectorAll('.nav-dropdown.is-open')
        .forEach(d => d.classList.remove('is-open'));
    }
  });

  header.querySelectorAll('.main-nav .nav-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector(':scope > a');
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      if (window.matchMedia('(max-width: 720px)').matches) {
        e.preventDefault();
        dropdown.classList.toggle('is-open');
      }
    });
  });
})();

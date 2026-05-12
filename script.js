(() => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const header = document.querySelector('.site-header');
  if (!toggle || !header) return;

  const setHeaderHeight = () => {
    document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
  };
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);
  window.addEventListener('load', setHeaderHeight);

  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    if (!open) {
      header.querySelectorAll('.nav-dropdown.is-open')
        .forEach(d => d.classList.remove('is-open'));
    }
  });

  header.querySelectorAll('.main-nav .nav-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector(':scope > a');
    const back = dropdown.querySelector('.mega-back');

    if (trigger) {
      trigger.addEventListener('click', (e) => {
        if (window.matchMedia('(max-width: 720px)').matches) {
          e.preventDefault();
          dropdown.classList.add('is-open');
        }
      });
    }

    if (back) {
      back.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.remove('is-open');
      });
    }
  });
})();

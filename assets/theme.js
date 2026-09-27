document.addEventListener('click', function (e) {
  const menuBtn = e.target.closest('.hdt-push-menu-btn');
  if (!menuBtn) return;

  const header = document.querySelector('.header');
  if (!header) return;

  const headerBottom = header.getBoundingClientRect().bottom;
  document.documentElement.style.setProperty('--live-header-bottom', headerBottom + 'px');
});
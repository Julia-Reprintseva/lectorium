if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link || typeof ym !== 'function') return;
    const href = link.getAttribute('href');
    if (href.startsWith('https://t.me/juliareprintseva') && !href.includes('juliareprintseva_roman')) {
      ym(111510411, 'reachGoal', 'contact_telegram');
    } else if (href.startsWith('mailto:')) {
      ym(111510411, 'reachGoal', 'contact_email');
    }
  });
});

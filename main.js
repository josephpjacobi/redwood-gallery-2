const navigationMenuToggle = document.querySelector(
  '[aria-controls="primary-nav"]'
);
const primaryNav = document.querySelector('.header-navigation');

navigationMenuToggle.addEventListener('click', () => {
  const isNavMenuOpen =
    navigationMenuToggle.getAttribute('aria-expanded');

  if (isNavMenuOpen === 'false') {
    navigationMenuToggle.setAttribute('aria-expanded', 'true');
  } else {
    navigationMenuToggle.setAttribute('aria-expanded', 'false');
  }

  console.log(navigationMenuToggle.getAttribute('aria-expanded'));
});

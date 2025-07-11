
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  iconSun.style.display = 'none';
  iconMoon.style.display = 'inline';
  localStorage.setItem('darkmode', 'active');
};
const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  iconSun.style.display = 'inline';
  iconMoon.style.display = 'none';
  localStorage.setItem('darkmode', null);
};
if (darkmode === 'active') enableDarkmode();

themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
});
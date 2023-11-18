const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');

themeToggle.addEventListener('click', () => {
  if (themeStyle.getAttribute('href') === 'light-theme.css') {
    themeStyle.setAttribute('href', 'dark-theme.css');
    themeToggle.textContent = 'Switch to Light Mode';
  } else {
    themeStyle.setAttribute('href', 'light-theme.css');
    themeToggle.textContent = 'Switch to Dark Mode';
  }
});

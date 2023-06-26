function appearNavBar() {
  const navbar = document.querySelector('.header');
  const btnOpen = document.querySelector('.btn-open');
  const btnClose = document.querySelector('.btn-close');
  const navList = document.querySelector('.navList');

  navbar.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
      (btnClose.style.transform === 'scale(1)') ? btnClose.style.transform = 'scale(0)': btnClose.style.transform = 'scale(1)';

      (btnOpen.style.transform === 'scale(0)') ? btnOpen.style.transform = 'scale(1)': btnOpen.style.transform = 'scale(0)';
      navList.classList.toggle('appearNav')
    }
  })
}

export default appearNavBar;
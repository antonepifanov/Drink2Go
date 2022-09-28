(() => {
  const TABLET_WIDTH = 768;
  const header = document.querySelector(".header");
  const button = header.querySelector(".header__menu-button");
  let isMenuOpen = true;

  const openMenu = () => {
    header.classList.remove("header--closed");
    header.classList.add("header--opened");
    isMenuOpen = !isMenuOpen;
  };

  const hideMenu = () => {
    header.classList.add("header--closed");
    header.classList.remove("header--opened");
    isMenuOpen = !isMenuOpen;
  };

  header.classList.remove("header--no-js");

  if (window.innerWidth < TABLET_WIDTH) {
    hideMenu();
  };

  window.addEventListener('resize', () => {
    window.innerWidth >= TABLET_WIDTH
      ? openMenu()
      : hideMenu()
  });

  button.addEventListener("click", () => {
    isMenuOpen
      ? hideMenu()
      : openMenu()
    }
  );
})();

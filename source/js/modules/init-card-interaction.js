(() => {
  const TABLET_WIDTH = 768;
  const cards = document.querySelectorAll(".card");

  if (!cards) return;

  cards.forEach((card) => {
    const cardLink = card.querySelector(".card__link");

    if (window.innerWidth >= TABLET_WIDTH) {
      cardLink.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0px 5px 15px 0px rgba(0, 0, 0, 0.15)";
      });

      cardLink.addEventListener("focus", () => {
        card.style.boxShadow = "0px 5px 15px 0px rgba(0, 0, 0, 0.15)";
      });

      cardLink.addEventListener("mouseleave", () => {
        card.style.boxShadow = "";
      });

      cardLink.addEventListener("blur", () => {
        card.style.boxShadow = "";
      });
    }

    cardLink.addEventListener("mousedown", () => {
      card.style.boxShadow = "0px 2px 5px 0px rgba(0, 0, 0, 0.15)";
    });

    cardLink.addEventListener("mouseup", () => {
      card.style.boxShadow = "";
    });
  })
})();

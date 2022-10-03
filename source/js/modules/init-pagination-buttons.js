(() => {
  const prevButton = document.querySelector(".pagination__button--prev");
  const nextButton = document.querySelector(".pagination__button--next");
  const numberButtons = document.querySelectorAll(".pagination__numbers-button");
  let currentButton = document.querySelector(".pagination__numbers-button--current");

  numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (!(numberButton.classList.contains("pagination__numbers-button--current"))) {
        numberButton.classList.add("pagination__numbers-button--current");
        currentButton.classList.remove("pagination__numbers-button--current");
        currentButton = numberButton;
      }

      if (numberButtons[0].classList.contains("pagination__numbers-button--current")) {
        prevButton.classList.add("pagination__button--disabled");
      } else {
        prevButton.classList.remove("pagination__button--disabled");
      };

      if (numberButtons[numberButtons.length - 1].classList.contains("pagination__numbers-button--current")) {
        nextButton.classList.add("pagination__button--disabled");
      } else {
        nextButton.classList.remove("pagination__button--disabled");
      };
    })
  });
})();

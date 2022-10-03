(() => {
  const prevButton = document.querySelector(".pagination__button--prev");
  const nextButton = document.querySelector(".pagination__button--next");
  const numberButtons = document.querySelectorAll(".pagination__numbers-button");

  if (numberButtons[0].classList.contains("pagination__numbers-button--current")) {
    prevButton.classList.add("pagination__button--disabled");
  };

  if (numberButtons[numberButtons.length - 1].classList.contains("pagination__numbers-button--current")) {
    nextButton.classList.add("pagination__button--disabled");
  };
})();

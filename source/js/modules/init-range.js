import noUiSlider from "nouislider";

(()=>{
  const range = document.querySelector(".filter__range-slider");
  const minPriceInput = document.querySelector(".filter__range-input--min input");
  const maxPriceInput = document.querySelector(".filter__range-input--max input");

  noUiSlider.create(range, {
    start: [0, 900],
    connect: [false, true, false],
    handleAttributes: [
      {"aria-label": "Минимальное значение"},
      {"aria-label": "Максимальное значение"},
    ],
    margin: 10,
    step: 10,
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        };
        return value.toFixed(1);
      },
      from: (value) => {
        return parseFloat(value);
      },
    },
    range: {
      "min": [0],
      "max": [1000],
    },
  });

  range.noUiSlider.on('update', (values, handle) => {
    const value = values[handle];

    handle
      ? maxPriceInput.value = value
      : value == 0
        ? minPriceInput.value = ""
        : minPriceInput.value = Math.round(value);
  });
})();

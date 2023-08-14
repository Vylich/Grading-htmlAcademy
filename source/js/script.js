const rangeSliderInit = () => {
  const range = document.getElementById("range");
  const inputMin = document.getElementById("min");
  const inputMax = document.getElementById("max");

  if (!range || !inputMin || !inputMax) return;

  const inputs = [inputMin, inputMax];

  noUiSlider.create(range, {
    start: [0, 123],
    connect: true,
    range: {
      min: 0,
      max: 140,
    },
    step: 1,
  });

  range.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener("change", function () {
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener("change", function () {
    range.noUiSlider.set([null, this.value]);
  });
};

const init = () => {
  rangeSliderInit();
};

window.addEventListener("DOMContentLoaded", init);

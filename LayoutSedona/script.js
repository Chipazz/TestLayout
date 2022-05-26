const popapOff = document.querySelector(".appointment__button");
const popap = document.getElementById("appointment");

popapOff.addEventListener("click", function() {
  popap.classList.toggle("popap-appointment--off");
  popap.classList.toggle("popap-appointment");
});

const getInput = (event) => {
  const button = event.target;

  const range = button.closest(".popap-counts__range");

  return range.querySelector("input");
}

const increaseInputValue = (event) => {
  const input = getInput(event)
  if (input.value <= 9) {
    input.value++;
  }
};

const descreaseInputValue = (event) => {
  const input = getInput(event)
  if (input.value >= 1) {
    input.value--;
  }
};

document.querySelectorAll(".popap-counts_plus").forEach((elem) => {
  elem.addEventListener("click", increaseInputValue);
});

document.querySelectorAll(".popap-counts_minus").forEach((elem) => {
  elem.addEventListener("click", descreaseInputValue);
});



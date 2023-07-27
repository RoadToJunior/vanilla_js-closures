const { noConflict, negate } = require("cypress/types/lodash");

let number = 0;

document.addEventListener("click", () => {
  number++;
  document.body.textContent = `Aktualny stan licznika to ${number}`;
});

function x() {
  let n = 0;
  function y() {
    console.log(n);
  }
  return y;
}

const example = x();

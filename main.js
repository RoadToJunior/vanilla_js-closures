// let number = 0;

// document.addEventListener("click", () => {
//   number++;
//   document.body.textContent = `Aktualny stan licznika to ${number}`;
// });

// function x() {
//   let n = 0;
//   function y() {
//     console.log(n);
//   }
//   return y;
// }

// const example = x();

let number = 0;

const add = (start = 0) => {
  let number = start;
  return () => {
    number++;
    document.body.textContent = `Stan licznika to ${number}`;
  };
};

const counter = add();
const counterFrom5 = add(5);

document.addEventListener("click", counter);

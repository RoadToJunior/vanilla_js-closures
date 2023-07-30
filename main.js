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

// let number = 0;

// const add = (start = 0) => {
//   let number = start;
//   return () => {
//     number++;
//     document.body.textContent = `Stan licznika to ${number}`;
//   };
// };

// const counter = add();
// const counterFrom5 = add(5);

// document.addEventListener("click", counter);

// const user = (user = "", age) => {
//   const userName = user;
//   const userAge = age;

//   function showName() {
//     console.log(
//       `Użytkownik ${userName} ${
//         userAge >= 18
//           ? "ma więcej niż 18 lat i może kupić piwo"
//           : "nie może kupić piwa"
//       } `
//     );
//     return showName;
//   }
// };
// const marcin = user("Marcin", 26);
// marcin();

//zadanie TIMER

const timer = () => {
  let number = 0;
  document.body.textContent = `${number} sekund`;
  return () => {
    number++;
    document.body.textContent = `${number} sekund`;
  };
};
const clock = timer();

setInterval(clock, 1000);

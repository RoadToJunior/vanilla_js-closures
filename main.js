let number = 0;

document.addEventListener("click", () => {
  number++;
  document.body.textContent = `Aktualny stan licznika to ${number}`;
});

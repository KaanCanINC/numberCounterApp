const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const counter = document.getElementById("counter");
let count = 0;

btnPlus.addEventListener("click", () => {
  const oldCount = ++count;
  counter.innerText = count;
  counter.classList.remove("active");
  void counter.offsetWidth;
  counter.classList.add("active");
  setTimeout(() => {
    counter.innerText = oldCount;
    counter.classList.remove("active");
  }, 400);
});

btnMinus.addEventListener("click", () => {
  const oldCount = --count;
  counter.innerText = count;
  counter.classList.remove("active");
  void counter.offsetWidth;
  counter.classList.add("active");
  setTimeout(() => {
    counter.innerText = oldCount;
    counter.classList.remove("active");
  }, 400);
});

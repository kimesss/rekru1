const btn = document.getElementById("button");
const first = document.getElementById("first");
const sec = document.getElementById("sec");

const random = () => {
  const number = Math.floor(Math.random() * 100 + 1);
  return number;
};

const table = () => {
  const table = [];
  for (let i = 0; i < 20; i++) {
    let a = random();
    table.push(a);
  }
  function compareNumbers(a, b) {
    return a - b;
  }
  table.sort(compareNumbers);
  return table;
};
const handleClick = () => {
  const sort = table();
  const parzyste = sort.filter((e) => e % 2 == 0);
  const nieParzyste = sort.filter((e) => e % 2 == 1);
  const a = nieParzyste.join(" \n");
  const b = parzyste.join(" \n");
  sec.innerText = b.toString();
  first.innerText = a.toString();
};

btn.addEventListener("click", handleClick);

let heading = document.querySelector(".heading");
let text = heading.innerHTML;
const chars = [...text];

const doSomething = () => {
  let res = "";
  chars.map((item) => {
    res += `<span class="item">${item}</span>`;
  });

  heading.innerHTML = res;
};

doSomething();

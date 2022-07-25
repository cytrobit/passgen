const signs = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPrRsStTuUwWxXyYzZ0123456789";
const specSigns = '!@#$%^&*()-_+={}[]|;:"<>,./?';
const btn = document.getElementById("generate");
const reset = document.getElementById("reset");
const section = document.querySelector("section");
const btnCopy = document.querySelector("#btnCopy");
let signNumbers = document.getElementById("signNumbers"); // number of signs in each code
const divInput = document.createElement("textarea");

const codesGenerator = () => {
  let code = "";
  if (signNumbers.value > 5 && signNumbers.value <= 24 && signNumbers !== NaN) {
    for (let j = 0; j < signNumbers.value; j++) {
      // how many signs in each code - loop
      const index = Math.floor(Math.random() * signs.length);
      code += signs[index];
    }
    divInput.remove();
    divInput.classList.add("res");
    divInput.textContent = code;
    section.appendChild(divInput);
  }

  btnCopy.addEventListener("click", function () {
    divInput.select();
    document.execCommand("copy");
  });
};

const resetAll = () => {
  divInput.textContent = "";
  signNumbers.value = "";
};

btn.addEventListener("click", codesGenerator);
reset.addEventListener("click", resetAll);
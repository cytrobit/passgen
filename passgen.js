const signs = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPrRsStTuUwWxXyYzZ0123456789";
const specSigns = '!@#$%^&*()-_+={}[]|;:"<>,./?';
const superString = signs + specSigns;
const btn = document.getElementById("generate");
const reset = document.getElementById("reset");
const section = document.querySelector("section");
const btnCopy = document.querySelector("#btnCopy");
let signNumbers = document.getElementById("signNumbers"); // number of signs in each code
const divInput = document.createElement("textarea");
const checkBox = document.getElementById("speChar");

const codesGenerator = () => {
  let code = "";
  if (signNumbers.value > 5 && signNumbers.value <= 24 && signNumbers !== NaN) {
    for (let j = 0; j < signNumbers.value; j++) {
      // how many signs in each code - loop
      if (checkBox.checked) {
        const index = Math.floor(Math.random() * superString.length);
        code += superString[index];
      } else {
        const index = Math.floor(Math.random() * signs.length);
        code += signs[index];
      }
    }
    divInput.remove();
    divInput.classList.add("res");
    divInput.textContent = code;
    section.appendChild(divInput);
    signNumbers.style.backgroundColor = "#000000";
  } else {
    signNumbers.style.backgroundColor = "#FF0000";
    alert("Podaj liczbę znaków dla swojego hasła (od 6 do 24)");
  }

  btnCopy.addEventListener("click", function () {
    divInput.select();
    divInput.setSelectionRange(0, 24);
    navigator.clipboard.writeText(divInput.value);
    // console.log("Skopiowany text to: " + divInput.value);
  });
};

const resetAll = () => {
  divInput.textContent = "";
  signNumbers.value = "";
};

btn.addEventListener("click", codesGenerator);
reset.addEventListener("click", resetAll);

//Calculation Section 

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "delete") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

 //Mode Changer Section 
 
const modeChangerBtn = document.querySelector(".mode-changer");
const calculator = document.querySelector(".calculator");
const changerIcon = document.querySelector(".changer-btn");
let isDark = true;
modeChangerBtn.onclick = () => {
  calculator.classList.toggle("dark");
  modeChangerBtn.classList.toggle("active");
  isDark = !isDark;
};

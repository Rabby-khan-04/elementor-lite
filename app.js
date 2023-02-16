const display = document.getElementById("display-field");
const heading = document.getElementById("heading");
const align = document.querySelectorAll('input[type="radio"]');

const size = document.getElementById("size");

const color = document.getElementById("color");

const fontFamily = document.getElementById("font-family");

heading.onkeyup = () => {
  display.innerText = heading.value;
};

align.forEach((item) => {
  item.onchange = () => {
    display.style.textAlign = item.value;
  };
});

size.oninput = () => {
  display.style.fontSize = size.value + "px";
};
color.oninput = () => {
  display.style.color = color.value;
};

fontFamily.oninput = () => {
  display.style.fontFamily = fontFamily.value;
};


//Variables
const inputColor1 = document.getElementById("color1");
const inputColor2 = document.getElementById("color2");
const bodyTag = document.getElementById("body");
const h3 = document.getElementById("linear");

const setColor = () => {
    bodyTag.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    h3.textContent = bodyTag.style.background + ";";
}



inputColor1.addEventListener("input", setColor);
inputColor2.addEventListener("input", setColor);
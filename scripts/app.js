let containerEl = document.querySelector(".container");
console.log(containerEl);
for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
        let createDiv = document.createElement("div");
        createDiv.classList.add("box");
        createDiv.textContent = `${col}`;
        containerEl.appendChild(createDiv);
    }
}
// Pixel change when hover over a box
// Select all square box in the page
let allBoxEl = document.querySelectorAll(".box");
console.log(allBoxEl);
function changeBoxColor(e) {
    e.target.style.backgroundColor = "purple";
}
allBoxEl.forEach((box) => box.addEventListener("mouseover", changeBoxColor));

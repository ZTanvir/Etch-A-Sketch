let containerEl = document.querySelector(".container");
console.log(containerEl);
for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
        let createDiv = document.createElement("div");
        createDiv.classList.add("box");
        createDiv.textContent = `${row},${col}`;
        containerEl.appendChild(createDiv);
    }
}

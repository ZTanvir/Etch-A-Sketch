let containerEl = document.querySelector(".container");

// Feature custom color btn
let customColorBtn = document.querySelector(".random-color");
customColorBtn.addEventListener("click", function (e) {
    customColorBtn.classList.add("true");
});
// Feature choose a color
// Select color picker
let chooseColor = document.querySelector("#choose-color");
chooseColor.addEventListener("input", function (e) {
    let defaultColor = "#e66465";
    let newColor = chooseColor.value;
    // Check for random color button is enable
    if (customColorBtn.classList.contains("true")) {
        customColorBtn.classList.remove("true");
    }
    if (defaultColor != newColor) {
        chooseColor.classList.add("picked");
    }
});

// Get user input
let userInputSquare = document.querySelector("#total-box");
document.querySelector(".generate-btn").addEventListener("click", function (e) {
    // Remove all the children from container parent
    while (containerEl.firstChild) {
        containerEl.removeChild(containerEl.firstChild);
    }

    // Convert user input string to number
    let row_sqr = Number(userInputSquare.value);
    let col_sqr = row_sqr;

    // Create div with custom row and column
    // If user input 6 , row_sqr and col_sql will be 6
    for (let row = 0; row < row_sqr; row++) {
        for (let col = 0; col < col_sqr; col++) {
            let createDiv = document.createElement("div");
            createDiv.classList.add("box");
            containerEl.appendChild(createDiv);
        }
    }

    // Select all the little square box element
    let allBoxEl = document.querySelectorAll(".box");
    // Set the width and height of the little square box
    // So they can be adjust side by side,top and bottom
    let set_width = 100 / row_sqr;
    let set_height = set_width;
    allBoxEl.forEach((small_box) => (small_box.style.width = `${set_width}%`));
    allBoxEl.forEach(
        (small_box) => (small_box.style.height = `${set_height}%`)
    );

    // Random number genarator
    let randomNumber = function () {
        //  random number between 0 - 255
        return Math.floor(Math.random() * 255);
    };

    // By hover the mouse the background color of a little sqr
    // box will change
    function changeBoxColor(e) {
        // Random color
        if (customColorBtn.classList.contains("true")) {
            let red = randomNumber();
            let blue = randomNumber();
            let green = randomNumber();
            e.target.style.backgroundColor = `rgb(${red},${blue},${green})`;
        } else if (chooseColor.classList.contains("picked")) {
            let newColor = chooseColor.value;
            e.target.style.backgroundColor = `${newColor}`;
        } else {
            e.target.style.backgroundColor = "black";
        }
    }
    allBoxEl.forEach((box) =>
        box.addEventListener("mouseover", changeBoxColor)
    );
});

// Clear the sketchpad when reset btn clicked
let resetBtnEl = document.querySelector(".reset")
resetBtnEl.addEventListener("click",function(e){
    while (containerEl.firstChild) {
        containerEl.removeChild(containerEl.firstChild);
    }
})



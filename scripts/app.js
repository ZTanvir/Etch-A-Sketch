let containerEl = document.querySelector(".container");
console.log(containerEl);

// Get user input
let userInputSquare = document.querySelector("input");
document.querySelector("button").addEventListener("click", function (e) {
    // Remove all the children from container parent
    while(containerEl.firstChild){
        containerEl.removeChild(containerEl.firstChild)
    }
    
    console.log(userInputSquare.value);
    console.log(typeof userInputSquare.value);
    // Convert user input string to number
    let row_sqr = Number(userInputSquare.value);
    let col_sqr = row_sqr;
    console.log(typeof col_sqr);

    // Create div with custom row and column
    // If user input 6 , row_sqr and col_sql will be 6
    for (let row = 0; row < row_sqr; row++) {
        for (let col = 0; col < col_sqr; col++) {
            let createDiv = document.createElement("div");
            createDiv.classList.add("box");
            createDiv.textContent = `${col}`;
            containerEl.appendChild(createDiv);
        }
    }

    // Select all the little square box element
    let allBoxEl = document.querySelectorAll(".box");
    console.log("allbox:", allBoxEl);
    // Set the width and height of the little square box
    // So they can be adjust side by side,top and bottom
    let set_width = 100 / row_sqr;
    let set_height = set_width;
    allBoxEl.forEach((small_box) => (small_box.style.width = `${set_width}%`));
    allBoxEl.forEach(
        (small_box) => (small_box.style.height = `${set_height}%`)
    );

    // By hover the mouse the background color of a little sqr
    // box will change
    function changeBoxColor(e) {
        e.target.style.backgroundColor = "purple";
    }
    allBoxEl.forEach((box) =>
        box.addEventListener("mouseover", changeBoxColor)
    );
});



// Function to add color to a pixel
const changeColor = pixel => {
    const square = document.getElementById(pixel.originalTarget.id);
    square.style.backgroundColor = "red";
};

const board = document.getElementById("board");

for(let i = 0; i < 256; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.id = "pixel" + i;
    board.append(pixel);
}

const pixel = document.querySelectorAll(".pixel");

pixel.forEach(square => {
    square.addEventListener("mouseover", changeColor);
});





/*
LESSONS LEARNED:

> For every element created by javascript there is only one instance of it.
If we want to create another element of the same type but with a different
purpose, we have to create a different variable for that.

*/
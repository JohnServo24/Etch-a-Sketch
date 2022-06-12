
// Function to add color to a pixel
const changeColor = pixel => {
    const square = document.getElementById(pixel.originalTarget.id);
    square.style.backgroundColor = "red";
};

// Function to create board
const createBoard = (board, pixels) => {

    board.style.gridTemplateColumns = `repeat(${pixels}, ${100/pixels}%)`;

    for(let i = 0; i < pixels * pixels; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.id = "pixel" + i;
        pixel.style.width = `${960/pixels}px`;
        pixel.style.height = `${960/pixels}px`;

        board.append(pixel);
    }
    
    // Returns the nodelist of all pixels to be used later
    const boardOutput = document.querySelectorAll(".pixel");
    return boardOutput;
};

const hoverColor = (pixel, changeColor) => {
    pixel.forEach(square => {
        square.addEventListener("mouseover", changeColor);
    });
}

const changeSize = a => {
    // const size = prompt("Plese enter the size of the grid");

    // return parseInt(size);

    console.log(a);
};

const board = document.getElementById("board");
const changeSizeBtn = document.getElementById("changeSizeBtn");
const pixel = createBoard(board, 16);

changeSizeBtn.addEventListener("click", changeSize);

hoverColor(pixel, changeColor);




/*
LESSONS LEARNED:

> For every element created by javascript there is only one instance of it.
If we want to create another element of the same type but with a different
purpose, we have to create a different variable for that.

*/
// NOTE: The extra, messy comments are for myself so that I can understand what's going on

const generateRandNum = limit => {
    return Math.floor((Math.random() * limit) + 1);
};

// Function to add color to a pixel
const changeColor = pixel => {
    let r = generateRandNum(255);
    let g = generateRandNum(255);
    let b = generateRandNum(255);

    // Gets the target ID from the object of the div
    const square = document.getElementById(pixel.originalTarget.id);
    // Changes it into black
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

// Creates the default board
const defaultBoard = (board, createBoard, hoverColor, changeColor) => {
    // Creates a 16x16 board
    let pixel = createBoard(board, 16);
    hoverColor(pixel, changeColor);
};

// Function to create board
const createBoard = (board, pixels) => {
    // Grid to scale the amount of boxes to the size of the whole board
    board.style.gridTemplateColumns = `repeat(${pixels}, ${100/pixels}%)`;

    // Adds all of the required divs inside the board
    for(let i = 0; i < pixels * pixels; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel"); // To be used w/ CSS
        pixel.id = "pixel" + i; // For identification purposes in the hovering

        // appropriate sizes to scale the amount of boxes to the size of the whole board
        pixel.style.width = `${960/pixels}px`;
        pixel.style.height = `${960/pixels}px`;

        board.append(pixel);
    }
    
    // Returns the nodelist of all pixels to be used in the hover function
    const boardOutput = document.querySelectorAll(".pixel");
    return boardOutput;
};

// Clears the board
const clearBoard = board => {
    while(board.firstChild) { // Checks if the board has a first child
        board.removeChild(board.firstChild); // If there is, deletes it
    }

    // This function will keep on checking if there is a child and 
    // kills them until there are no children anymore
};

// Function to detect if the mosue has hovered
const hoverColor = (pixel, changeColor) => {
    // Selects all of the pixels under the board
    pixel.forEach(square => {
        // This will wait until the mouse has hoevered on one of the pixels
        // If the mouse has hovered on one of the pixels, this activates
        square.addEventListener("mouseover", changeColor);
    });
};

// Changes the size of the board
const changeSize = (board, createBoard, hoverColor, clearBoard, changeColor) => {
    // Asks user to enter the size of the grid
    let size = prompt("Plese enter the size of the grid");

    if (!size) { // If the user didn't enter anything. Basically checks for falsy values
        return;
    } else if (size >= 100) { // If the user entered a number > 100
        alert("Please enter a size below 100");
        return;
    } else if (isNaN(parseInt(size))) { // If the user entered a string
        alert ("Please enter a number!");
        return;
    }

    // Clears the board because if we don't clear it,
    // the new board is gonna be added on top of the old board
    clearBoard(board);

    // Creates the board and puts its nodelist in this variable
    // The reason why we need to put the nodelist in this variable
    // is so that we can use it on the hoverColor function
    let pixel = createBoard(board, parseInt(size));
    hoverColor(pixel, changeColor);
};

const board = document.getElementById("board"); // Gets the board
const changeSizeBtn = document.getElementById("changeSizeBtn"); // Gets the button

// Creates the default board
defaultBoard(board, createBoard, hoverColor, changeColor);

// Button to change the size of the board
changeSizeBtn.addEventListener("click", () => {changeSize(board, createBoard, hoverColor, clearBoard, changeColor)});






/*
LESSONS LEARNED:

> For every element created by javascript there is only one instance of it.
If we want to create another element of the same type but with a different
purpose, we have to create a different variable for that.

*/
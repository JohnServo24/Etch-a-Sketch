const board = document.getElementById("board");

for(let i = 0; i < 256; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    board.append(pixel);
}





/*
LESSONS LEARNED:

> For every element created by javascript there is only one instance of it.
If we want to create another element of the same type but with a different
purpose, we have to create a different variable for that.

*/
var numSquares              = 6;
var colors                  = generateRandomColors(numSquares);
var squares                 = document.querySelectorAll(".square");
var pickedColor             = pickColor();
var colorDisplay            = document.getElementById("colorDisplay");
var messageDisplay          = document.getElementById("message");
var headerOne               = document.querySelector("h1");
var resetButton             = document.getElementById("resetButton");
var easyBtn                 = document.getElementById("easyBtn");
var hardBtn                 = document.getElementById("hardBtn");
colorDisplay.textContent    = pickedColor;

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    // generate new random colors
    colors = generateRandomColors(numSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    // change headerOne bg color
    headerOne.style.backgroundColor = "steelblue";
});

// loop through squares bg color
for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of picked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            headerOne.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

// change all squares to clikedColor
function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

// pick random color at game start/refresh
function pickColor() {
    // pick random number
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

// generateRandomColors function
function generateRandomColors(num) {
    // create array
    var arr = [];
    // add randomColors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    // return array
    return arr;
}

// pick random RGB value
function randomColor() {
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    // return variables combined
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
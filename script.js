var numSquares              = 6;
var colors                  = [];
var pickedColor;
var squares                 = document.querySelectorAll(".square");
var colorDisplay            = document.getElementById("colorDisplay");
var messageDisplay          = document.getElementById("message");
var headerOne               = document.querySelector("h1");
var resetButton             = document.getElementById("resetButton");
var modeButtons             = document.querySelectorAll(".mode");

init();

function init(){
    setModeButtons();
    setSquares();
    reset();
}

// modeButtons eventListener
function setModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

// squares eventListeners
function setSquares(){
    for (var i = 0; i < squares.length; i++) {
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
}

// function to generate new random colors
function reset(){
    colors = generateRandomColors(numSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // resetButton text
    resetButton.textContent = "New Colors"
    // reset messageDisplay
    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    // change headerOne bg color
    headerOne.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

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
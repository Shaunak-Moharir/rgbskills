var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var h1 = document.querySelector("h1");

var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
    //add colors
    squares[i].style.backgroundColor = colors[i];
    
    //add eventlistner

    squares[i].addEventListener("click", function(){
        //grab color
        
        var clickedColor = this.style.backgroundColor;

        
        //compare

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;

        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        }


    });
}

function changeColors(color){

    for(var i = 0; i<squares.length; i++){

        squares[i].style.backgroundColor = color;

    }

}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];

    for(var i = 0; i <num; i++){
        //get random color
        arr.push(randomColor())
    }

    //add num random colors to array

    //return that array
    return arr;
}


function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
var nos = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var modeBtn = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#reset");

init();

function init(){

    setUpMode();
    setUpSq();
    reset();
    
}

function setUpMode(){
    for(var i = 0; i < modeBtn.length;i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? nos = 3: nos = 6;
            reset();
        
        }
        );
    }
}

function setUpSq(){
    for(var i = 0; i<squares.length; i++){
    
        //add eventlistner
    
        squares[i].addEventListener("click", function(){
            //grab color
            
            var clickedColor = this.style.backgroundColor;
    
            
            //compare
    
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
    
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!"
            }
    
    
        });
    }

}

function reset(){
     //generate new colors
     colors = generateRandomColors(nos);
     //pick new color
          pickedColor = pickColor();
      //change colorDisplay
          colorDisplay.textContent = pickedColor;
  
          messageDisplay.textContent = "";
          resetButton.textContent = "New Colors";
      //change colors
      for(var i = 0; i<squares.length; i++){
          //add colors
          if(colors[i]){
            squares[i].style.display = "block";
          squares[i].style.backgroundColor = colors[i];
          } else {
              squares[i].style.display = "none";
          }
      } 
      h1.style.backgroundColor = "steelblue";
  
}

resetButton.addEventListener("click", function(){

    reset();
 });
 
 
 
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





// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   nos = 3;
//   colors = generateRandomColors(nos);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i <squares.length; i++){
//       if(colors[i]){
//           squares[i].style.backgroundColor = colors[i];
//       }
//       else {
//         squares[i].style.display = "none";
//       }
//   }

// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     nos = 6;
//     colors = generateRandomColors(nos);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i <squares.length; i++){
//           squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//   }
// }); 


var numSquares = 6;

var colors=generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickcolor();

var colorDisplay =document.getElementById("colorDisplay");

var messageDisplay = document.getElementById("message");

var h1 = document.querySelector("h1");

var resetbutton=document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");

var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }

});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
     
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
       
    }
    
});




resetbutton.addEventListener("click",function(){
    //generate new colors
    colors=generateRandomColors(numSquares);

    //pick new rndom color
    pickedColor = pickcolor();

    //change rgb written number
    colorDisplay.textContent = pickedColor;
    
    this.textContent="NEW COLORS";

    messageDisplay.textContent="";
    //change colors of square
    for(var i=0;i<squares.length;i++){
        
        squares[i].style.backgroundColor=colors[i];
    
    }

    h1.style.backgroundColor = "steelblue";
    

})


colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
    //filling colors in sqa ure
    squares[i].style.backgroundColor=colors[i];


    //adding click listners
    squares[i].addEventListener("click",function(){

    //grabing the rgb value of picked color
    var clickedcolor = this.style.backgroundColor;
    console.log(clickedcolor,pickedColor);
    //comparing the picked color

    if(clickedcolor===pickedColor){
        messageDisplay.textContent = "CORRECT"
        resetbutton.textContent="phirse khelen?"
        changeColors(clickedcolor);
        h1.style.backgroundColor = clickedcolor;
    }
    else{
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "TRY AGAIN"
    }

});
}


function changeColors(color) {
    //sab square me sahi wale sqaure ka color bharna hai
    for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color;

    }

}

function pickcolor(){
   var random = Math.floor(Math.random()*colors.length);

   return  colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for(var i=0;i<num;i++){
        //add num random colors to array
        arr.push(randomColors())
    }

    //return that array
    return arr;
}

function randomColors(){
   //pick a "red" from 0-255
   var r= Math.floor(Math.random()*256);

   //pick a "green" from 0-255
   var g= Math.floor(Math.random()*256);


   //pick a "blue" from 0-255
   var b= Math.floor(Math.random()*256);

   return "rgb(" + r +", " + g + ", " + b + ")";


}
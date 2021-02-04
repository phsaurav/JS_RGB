var numSquares = 6;
var color = generateColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var reset = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");



for(var i =0; i < modeButtons.length; i++){
    
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        resetit();

    });
}

function resetit(){
    color = generateColor(numSquares);
	console.log(color);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
        if(color[i])
		{
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = color[i];
        } else{
            squares[i].style.display = "none";
        }
	}

	reset.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

colorDisplay.textContent = pickedColor;

reset.addEventListener("click", function(){
    resetit(); 
});

for(var i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = color[i];

    squares[i].addEventListener("click",function(){
        var clicked = this.style.backgroundColor;

        console.log(clicked, pickedColor);
        if(clicked === pickedColor){
            messageDisplay.textContent = "Correct!";
            reset.textContent="Play Again!";
            correctColor(clicked);
            h1.style.backgroundColor = clicked;
        }else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
}

function correctColor(color){
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;

    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generateColor(num)
{
    var arr = [];

    for(var i = 0; i < num; i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*266);
    var g = Math.floor(Math.random()*266);
    var b = Math.floor(Math.random()*266);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
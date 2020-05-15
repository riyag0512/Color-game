var number=6;
var colors = generateColors(number);
var h1=document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pick();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#trys");
var resetbut=document.querySelector("#reset");
colorDisplay.textContent = pickedColor;
var easyBut=document.querySelector("#easy");

var hardBut=document.querySelector("#hard");
easyBut.addEventListener("click",function()
{
		h1.style.background="steelblue";
	hardBut.classList.remove("selected");
	easyBut.classList.add("selected");
	number=3;
	colors = generateColors(number);
		pickedColor = pick();
		colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
			squares[i].style.background=colors[i];
		else
			squares[i].style.display="none";
	}

	

});
hardBut.addEventListener("click",function()
{
		h1.style.background="steelblue";
	easyBut.classList.remove("selected");
	hardBut.classList.add("selected");
	number=6;
	colors = generateColors(number);
		pickedColor = pick();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.background=colors[i];
              	squares[i].style.display="block";
		
	}


});
resetbut.addEventListener("click",function()
{    
	messageDisplay.textContent="";
	resetbut.textContent="New color";
	colors=generateColors(number);
	this.textContent="New colors";
    pickedColor=pick();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];
	h1.style.background="steelblue";
}

});

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			alert("Correct!");
			messageDisplay.textContent="correct";
			colorChange(pickedColor);
			h1.style.background=pickedColor;
			resetbut.textContent="play again?";

		} else {
			alert("WRONG!!!");
			messageDisplay.textContent="Try again!!";
			this.style.background="black";
		}
	});
}
function colorChange(color)
{
	for(var i=0;i<squares.length;i++) 
		squares[i].style.background= color;
}
function pick()
{
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateColors(num)
{
	var arr= [];
	for( var i=0;i<num;i++)
		arr.push(randomColor())
	return arr;
}
function randomColor()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", " + b + ")";
}
// find the canvas element
let canvas = document.getElementById("myCanvas");

// create a drawing object
let ctx = canvas.getContext("2d");

//drawing on the canvas
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(75, 50, 150, 100);

// ctx.fillStyle = "#00FF00";
// ctx.fillRect(0, 0, 150, 100);

// text context.strokeText(text,x,y,maxWidth);
ctx.font = "30px Arial";
ctx.fillText("Hello World", 50, 50,1000);
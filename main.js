var mouseeventos = " ";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "red";
var widthc = 2;

canvas.addEventListener("mousedown", mymousedown);
function  mymousedown(){
    mouseeventos = "mousedown";
}

canvas.addEventListener("mousemove", mymousemove);
function  mymousemove(e){
    positionX = e.clientX - canvas.offsetLeft;
    positionY = e.clientY - canvas.offsetTop;

    if (mouseeventos == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthc;
        ctx.arc(positionX, positionY, 20, 0, 2*Math.PI);
        ctx.stroke(); 
       }
}

canvas.addEventListener("mouseup", mymouseup);
function  mymouseup(){
    mouseeventos = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function  mymousleave(){
    mouseeventos = "mouseleave";
}
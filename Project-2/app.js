let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height  = window.innerHeight;

let ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgba(255,0, 0, 0.1)';
ctx.fillRect(100, 100, 100, 100); 
ctx.fillStyle = 'blue';      // fillRec(x,y,width, height)
ctx.fillRect(400, 100, 100, 100); 
ctx.fillStyle = 'green';   
ctx.fillRect(300, 300, 100, 100); 

// Lines
ctx.beginPath();
ctx.moveTo(50, 300); // x, y
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = "blue";
ctx.stroke();

// Arc/ Circle
ctx.beginPath();
ctx.arc(300, 300, 30, 0, Math.PI * 2, false); // arc(x,y,radius, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false))
ctx.strokeStyle = "yellow";
ctx.stroke(); 

// Drawing multiple circles at once
for(let i = 0; i < 100; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "purple";
    ctx.stroke();
}
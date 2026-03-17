let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');      // ctx ===> context
ctx.fillRect(100, 100, 100, 100);       // fillRec(x,y,width, height)
ctx.fillRect(400, 100, 100, 100);    
ctx.fillRect(300, 300, 100, 100);      
ctx.fillRect(100, 200, 100, 100);      
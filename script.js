//console.log(window, {document});
// setTimeout(() => {
//    document.location = 'https://google.com';
// }, 5000);
let canvas = document.querySelector( 'canvas');
let ctx = canvas.getContext('2d');
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100, 50, 0, 2 * Math.PI);
ctx.strokeStyle = 'green'
ctx.lineWidth = 1;
ctx.stroke();
ctx.font = "30px Arial";
ctx.fillText('Hello Canvas', 30, 50);
ctx.strokeText('Hello Canvas', 30, 100);
ctx.fillStyle = '#ff0';
ctx.fillRect(10, 10, 10, 10);
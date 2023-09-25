//console.log(window, {document});
// setTimeout(() => {
//    document.location = 'https://google.com';
// }, 5000);
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 10;
let y = 10;
let pressed = false;
let arcSize = 20;

let color = document.querySelector('#color');

setInterval(() => {
    if(pressed){
        ctx.fillStyle = color.value;
        ctx.beginPath();
        ctx.arc(x, y, arcSize, 0, 2*Math.PI);
        ctx.fill();
    }
},16);

canvas.addEventListener('mousemove', event => {
    console.log(event);
    x = event.clientX - canvas.offsetLeft;
    y = event.clientY - canvas.offsetTop;
});
canvas.addEventListener('mousedown', event => {
    pressed = true;
});
canvas.addEventListener('mouseup', event => {
    pressed = false;
});
let size = document.querySelector('#size');
let sizeValue = document.querySelector('#sizeValue');
sizeValue.innerHTML = size.value;
size.addEventListener('input', ()=> {
    sizeValue.innerHTML = size.value;
    arcSize = size.value;
});

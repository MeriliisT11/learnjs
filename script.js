//console.log(window, {document});
// setTimeout(() => {
//    document.location = 'https://google.com';
// }, 5000);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 250, 50);
ctx.fillStyle = "black";
ctx.fillRect(0, 50, 250, 50);

ctx.strokeStyle = "black";
ctx.strokeRect(0, 0, 250, 300);

ctx.beginPath();
ctx.moveTo(370, 50); // Move pen to bottom-left corner
ctx.lineTo(400,10); // Line to top corner
ctx.lineTo(430, 50); // Line to bottom-right corner
ctx.closePath(); // Line to bottom-left corner
ctx.stroke();

ctx.beginPath();
ctx.moveTo(370, 25); // Move pen to bottom-left corner
ctx.lineTo(400, 64); // Line to top corner
ctx.lineTo(430, 25); // Line to bottom-right corner
ctx.closePath(); // Line to bottom-left corner
ctx.stroke();

// Create circular clipping region
ctx.beginPath();
ctx.arc(400, 110, 30, 0, Math.PI * 2);
ctx.clip();

// Draw stuff that gets clipped
ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "pink";
ctx.fillRect(401, 15, 30, 95);


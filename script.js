const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 600; 
canvas.height = 600; 

function draw() {
  ctx.fillStyle = '#262223'; // Background color
  ctx.fillRect(13, 15, 575, 575, 50); // Rounded rectangle

  ctx.fillStyle = 'white'; 
  ctx.beginPath();
  ctx.arc(300, 300, 225, 0, 2 * Math.PI); // White circle
  ctx.fill(); 

  ctx.fillStyle = '#5A7348';
  ctx.beginPath();
  ctx.arc(300, 300, 205, 0, 2 * Math.PI); // Green circle
  ctx.fill();  

  ctx.fillStyle = 'white'; // White circles
  drawCircle(210, 300, 62.5); 
  drawCircle(390, 300, 62.5);

  // Mouse click interaction
  if (mouseIsPressed === true) { 
    drawHalfCircle(390, 300, 62.5, 1); // Right half-circle
  }

  // Keyboard interaction
  if (keyIsPressed === true) {  
    drawHalfCircle(210, 300, 62.5, 0); // Left half-circle
    drawHalfCircle(390, 300, 62.5, 1); // Right half-circle
  }

  // "a" and "b" key interaction
  if (key === 'a') {
    drawHalfCircle(210, 300, 62.5, 0); // Left half-circle
    drawHalfCircle(390, 300, 62.5, 1); // Right half-circle
  } 
}

// Helper functions for reusability
function drawCircle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function drawHalfCircle(x, y, radius, direction) {
  ctx.fillStyle = '#5A7348';
  ctx.beginPath();
  ctx.arc(x, y, radius, direction * Math.PI, (direction + 1) * Math.PI);
  ctx.fill();
}

// Variables to track input states (need initialization)
let mouseIsPressed = false;
let keyIsPressed = false;
let key = '';

// Event Listeners
canvas.addEventListener('mousedown', () => { mouseIsPressed = true; });
canvas.addEventListener('mouseup', () => { mouseIsPressed = false; });
document.addEventListener('keydown', (event) => { 
  keyIsPressed = true;
  key = event.key;
}); 
document.addEventListener('keyup', () => { keyIsPressed = false; });

// Animation loop
function animate() {
  draw(); 
  requestAnimationFrame(animate);
}
animate(); 

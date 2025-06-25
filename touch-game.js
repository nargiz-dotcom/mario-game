
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = canvas.clientHeight;

let x = 50, y = canvas.height - 60, vx = 0, vy = 0, onGround = true;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'red';
  ctx.fillRect(x, y, 30, 30);
}

function update() {
  vy += 1;
  y += vy;
  x += vx;

  if (y > canvas.height - 30) {
    y = canvas.height - 30;
    vy = 0;
    onGround = true;
  }

  draw();
  requestAnimationFrame(update);
}

document.getElementById('left').ontouchstart = () => vx = -5;
document.getElementById('right').ontouchstart = () => vx = 5;
document.getElementById('left').ontouchend = () => vx = 0;
document.getElementById('right').ontouchend = () => vx = 0;
document.getElementById('jump').ontouchstart = () => {
  if (onGround) {
    vy = -20;
    onGround = false;
  }
};

update();

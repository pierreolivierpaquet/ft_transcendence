const canvas = document.getElementById("pong"); // Gets a reference to your HTML canvas element
const context = canvas.getContext("2d"); // Obtains the 2D rendering context, which is what we use to draw on the canvas.

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speed: 5,
  velocityX: 2,
  velocityY: 2,
  color: "WHITE",
};

function drawRect(x, y, width, height, color) {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fill();
}

function render() {
  drawRect(0, 0, canvas.width, canvas.height, "black");
  drawCircle(ball.x, ball.y, ball.radius, "white");
}

function game() {
  render();
  moveBall();
  update();
}

setInterval(game, 1000 / 60);

function moveBall() {
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.velocityX = -ball.velocityX;
  }

  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.velocityY = -ball.velocityY;
  }
}




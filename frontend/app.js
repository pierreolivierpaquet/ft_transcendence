const canvas = document.getElementById("pong"); // Gets a reference to your HTML canvas element
const context = canvas.getContext("2d"); // Obtains the 2D rendering context, which is what we use to draw on the canvas.

function drawRect(x, y, width, height, color) {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

function render() {
  drawRect(0, 0, canvas.width, canvas.height, "black");
}

function game() {
  render();
}

setInterval(game, 1000 / 60);

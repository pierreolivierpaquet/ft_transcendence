document.addEventListener("DOMContentLoaded", () => {
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const content = document.getElementById('content');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Intial page when the SPA is loaded
navigate('game');
});

function navigate(page) {
    const content = document.getElementById('content');
    switch (page) {
        case 'home':
            content.innerHTML = '<h1>Home</h1><p>Home page.</p>';
            break;
        case 'about':
            content.innerHTML = '<h1>About</h1><p>About</p>';
            break;
        case 'game':
            content.innerHTML = '<canvas id="pong" width="800" height="400"></canvas>';
            startGame();
            break;
        case 'login': {
            content.innerHTML = '<h1>Login</h1><p>Login to the SPA.</p>';
            break;
        };
        case'signup': {
            content.innerHTML = '<h1>Signup</h1><p>Signup to the SPA.</p>';
            break;
        };
        default:
            content.innerHTML = '<h1>Home</h1><p>Welcome to the home page.</p>';
    }
}

function startGame() {
const canvas = document.getElementById("pong");
if (!canvas) return;
const context = canvas.getContext("2d");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.code === "ArrowUp" || e.code === "KeyW") {
        userPaddle.dy = -5;
    } else if (e.code === "ArrowDown" || e.code === "KeyS") {
        userPaddle.dy = 5;
    }
}

function keyUpHandler(e) {
    if (e.code === "ArrowUp" || e.code === "KeyW") {
        userPaddle.dy = 0;
    } else if (e.code === "ArrowDown" || e.code === "KeyS") {
        userPaddle.dy = 0;
    }
}

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 500,
    velocityX: 5,
    velocityY: 5,
    color: "WHITE",
};

const userPaddle = {
    x: 10,
    y: canvas.height / 2 - 50,
    width: 5,
    height: 100,
    color: "RED",
    dy: 0,
};

const computerPaddle = {
    x: canvas.width - 20,
    y: canvas.height / 2 - 50,
    width: 5,
    height: 100,
    color: "RED",
    dy: 0,
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
    drawRect(userPaddle.x, userPaddle.y, userPaddle.width, userPaddle.height, userPaddle.color);
    drawRect(computerPaddle.x, computerPaddle.y, computerPaddle.width, computerPaddle.height, computerPaddle.color);
    drawNet();
}

function drawNet() {
    for (let i = 0; i < canvas.height; i += 5) {
        drawRect(canvas.width / 2 - 1, i, 2, 5, "white");
    }
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

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
    }

    let paddle = ball.x < canvas.width / 2 ? userPaddle : computerPaddle;

    if (
        ball.x < paddle.x + paddle.width + ball.radius &&
        ball.x > paddle.x - ball.radius &&
        ball.y < paddle.y + paddle.height + ball.radius &&
        ball.y > paddle.y - ball.radius
    ) {
        ball.velocityX = -ball.velocityX;
    }

    if (ball.x < 0 || ball.x > canvas.width) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
    }
}

function update() {
    if (userPaddle.dy < 0 && userPaddle.y > 0) {
        userPaddle.y += userPaddle.dy;
    } else if (userPaddle.dy > 0 && userPaddle.y < canvas.height - userPaddle.height) {
        userPaddle.y += userPaddle.dy;
    }
    computerPaddle.y = ball.y - computerPaddle.height / 2;
}
}

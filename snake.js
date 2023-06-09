'use strict';

// board
const blockSize = 25;
const rows = 20;
const cols = 20;
let board;
let context;

// snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let velocityX = 0;
let velocityY = 0;

let foodX;
let foodY;

console.log(foodX);

window.onload = function () {
  board = document.getElementById('board');
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext('2d');

  placeFood();
  document.addEventListener('keyup', changeDirection);
  setInterval(() => {
    update();
  }, 100);
};

function update() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = 'lime';
  snakeX += velocityX;
  snakeY += velocityY;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  context.fillStyle = 'red';
  context.fillRect(foodX, foodY, blockSize, blockSize);
}

function changeDirection(e) {
  console.log(e.code);
  if (e.code === 'ArrowUp') {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code === 'ArrowDown') {
    velocityX = 0;
    velocityY = +1;
  } else if (e.code === 'ArrowLeft') {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code === 'ArrowRight') {
    velocityX = 1;
    velocityY = 0;
  }
}

function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

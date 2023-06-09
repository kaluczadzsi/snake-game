'use strict';

// board
const blockSize = 25;
const rows = 20;
const cols = 20;
let board;
let context;

// snake head
const snakeX = blockSize * 5;
const snakeY = blockSize * 5;

let foodX = blockSize * 10;
let foodY = blockSize * 10;

console.log(foodX);

window.onload = function () {
  board = document.getElementById('board');
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext('2d');

  update();
};

function update() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = 'lime';
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  context.fillStyle = 'red';
  context.fillRect(foodX, foodY, blockSize, blockSize);
}

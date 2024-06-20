let directionDice = [1, 2, 3, 4, 5, 6, 7, 8];
let lengthDice = [1, 2, 3, 4];
let startX, startY;
let exitCount = 0;
const cmToPixels = 28.3465; 
const paperWidth = 41 * cmToPixels; 
const paperHeight = 28 * cmToPixels; 

function setup() {
  createCanvas(paperWidth, paperHeight);
  startX = width / 2;
  startY = height / 2;
  background(255);
  stroke(0);
  strokeWeight(2);
  drawLines();
}

function drawLines() {
  while (exitCount < 4) {
    let dir = random(directionDice);
    let len = random(lengthDice) * cmToPixels;

    let endX = startX;
    let endY = startY;

    switch (dir) {
      case 1:
        endY -= len; 
        break;
      case 2:
        endX += len; 
        break;
      case 3:
        endX -= len; 
        break;
      case 4:
        endY += len; 
        break;
      case 5:
        endX += len;
        endY += len; 
        break;
      case 6:
        endX -= len;
        endY -= len; 
        break;
      case 7:
        endX -= len;
        endY += len; 
        break;
      case 8:
        endX += len;
        endY -= len; 
        break;
    }

    line(startX, startY, endX, endY);

    if (endX < 0 || endX > width || endY < 0 || endY > height) {
      exitCount++;
      startX = width / 2;
      startY = height / 2;
    } else {
      startX = endX;
      startY = endY;
    }
  }
}
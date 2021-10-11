class Ball {
  constructor(x, y, w, h, vx, vy, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.c = c;
  }

  drawBall() {
    fill(this.c)
    ellipse(this.x, this.y, this.w, this.h);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
}

class Rect {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  drawRect() {
    fill(this.c)
    rect(this.x, this.y, this.w, this.h);
  }

  checkCollision() {
    if (ball1.y - ball1.h > this.y - this.h && ball1.y - ball1.h < this.y) {
      if (ball1.x > this.x && ball1.x < this.x + this.w) {
        this.c = "red";
        ball1 = new Ball(100, 315, 50, 50, 0, 0, "green");
        score ++;
        if(score == rects.length){
          gameState = 2;
        }
      }
    }
  }
}

var ball1, rect2, rect3, rect4, rect5;
var rects = [];

var gameState = 0;
var score = 0;

function setup() {
  createCanvas(500, 400);  

  ball1 = new Ball(100, 315, 50, 50, 0, 0, "green")
  rect2 = new Rect(400, 340, 60, 60, "white");
  rect3 = new Rect(400, 280, 60, 60, "white");
  rect4 = new Rect(400, 220, 60, 60, "white");
  rect5 = new Rect(400, 160, 60, 60, "white");

  rects.push(rect2);
  rects.push(rect3);
  rects.push(rect4);
  rects.push(rect5);
}

function game() {  
  background(img1);

  rects.forEach((r) => {
    r.drawRect();
    // checkcollision
    r.checkCollision()
  });

  
  ball1.drawBall();

  if (mouseIsPressed) {
    a = mouseX;
    b = mouseY;
  } else {
    a = 100;
    b = 315;
  }

  fill("green");

  line(100, 315, width, lineY2);

  if (keyIsDown(32)) {    
    ball1.vx = 5;
    frames = (width - 100) / ball1.vx;
    ball1.vy = ((315 - lineY2) / frames) * -1;
  }

  if (keyIsDown(UP_ARROW)) {
    lineY2 -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    lineY2 += 2;
  }
}

function menu() {
  background("#FFCCFF");
  text("Menu", 25, 45);
  text('1. Menu', 25, 65);
  text('2. Start game', 25, 85);
  text('3. Game over', 25, 105);

}

function preload() {
  img1 = loadImage('achtergrond.jpg');
}

function gameOver() {
  background(img1);
  text('Game over!', 25, 45);  
}

lineX2 = 250
lineY2 = 315

function draw() {

  if (gameState == 0) {
    menu();
  }

  else if (gameState == 1) {
    game();
  }

  else if (gameState == 2) {
    gameOver();
  }
}

function keyPressed() {
  if (keyCode == 49) {
    gameState = 0;
  }

  if (keyCode == 50) {
    gameState = 1;
  }

  if (keyCode == 51) {
    gameState = 2;
  }
}


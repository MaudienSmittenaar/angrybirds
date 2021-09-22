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

  class Rect {
    constructor(x, y, w, h, c)
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;

  }

  drawBall() {
    fill(this.c)
    ellipse(this.x, this.y, this.w, this.h);
  }
}
drawRect() {
    fill(this.c)
    rect(this.x, this.y, this.w, this.h);
  }
}

var ball1, rect2, ball3;
function setup() {
  createCanvas(500, 400);
  ball1 = new Ball(100, 100, 50, 50, 5, 5, "red")
  rect2 = new Rect(400, 300, 60, 100, "black")
}

function draw() {
  background(220);
  ball1.drawBall();
  if (mouseIsPressed) {
    a = mouseX;
    b = mouseY;
  } else {
    a = 250;
    b = 200;

  }
  fill("green");
  circle(a, b, 50);
  
}


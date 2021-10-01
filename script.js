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
}

var ball1, rect2, rect3, rect4, rect5;
function setup() {
  createCanvas(500, 400);
  ball1 = new Ball(100, 100, 50, 50, 5, 5, "red")
  rect2 = new Rect(400, 340, 60, 60, "white")
  rect3 = new Rect(400, 280, 60, 60, "white")
  rect4 = new Rect(400, 220, 60, 60, "white")
  rect5 = new Rect(400, 160, 60, 60, "white")
}

lineX2 = 250
lineY2 = 315

function draw() {
  background(220);
  ball1.drawBall();
  rect2.drawRect();
  rect3.drawRect();
  rect4.drawRect();
  rect5.drawRect();
  if (mouseIsPressed) {
    a = mouseX;
    b = mouseY;
  } else {
    a = 100;
    b = 315;

  }
  fill("green");
  circle(a, b, 25);
  
  line(100, 315, width, lineY2);

  if (keyIsDown(UP_ARROW)) {
    lineY2 -= 2;     
  }

  if (keyIsDown(DOWN_ARROW)) {
    lineY2 += 2;     
  }
}



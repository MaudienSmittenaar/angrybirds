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
}

var ball1, rect2, rect3, rect4, rect5;
function setup() {
  createCanvas(500, 400);
  ball1 = new Ball(100, 315, 50, 50, 0, 0, "green")
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

line(100, 315, width, lineY2);

  if (keyCode === 32) {
    ball1.vx = 5;
    frames = (width - 100) / ball1.vx;
    // console.log(frames, lineY2);
    // console.log(315 - lineY2)
    ball1.vy = ((315 - lineY2) / frames) * -1;
  }

  if (keyIsDown(UP_ARROW)) {
    lineY2 -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    lineY2 += 2;
  }

  if (a + 25 > rect2.x && a - 25 < rect2.x + rect2.w) {
    if (b + 25 > rect2.y && b - 25 < rect2.y + rect2.h)
      rect2.c = "red";
    else rect2.c = "white";
  }
  if (a + 25 > rect3.x && a - 25 < rect3.x + rect3.w) {
    if (b + 25 > rect3.y && b - 25 < rect3.y + rect3.h)
      rect3.c = "red";
    else rect3.c = "white";
  }
  if (a + 25 > rect4.x && a - 25 < rect4.x + rect4.w) {
    if (b + 25 > rect4.y && b - 25 < rect4.y + rect4.h)
      rect4.c = "red";
    else rect4.c = "white";
  }

  if (a + 25 > rect5.x && a - 25 < rect5.x + rect5.w) {
    if (b + 25 > rect5.y && b - 25 < rect5.y + rect5.h)
      rect5.c = "red";
    else rect5.c = "white";
  }
}


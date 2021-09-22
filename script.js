class Ball {
  constructor(x, y, w, h, vx, vy, c){
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
  ellipse(this.x, this.y,this.w, this.h);
 }
}

var ball1, ball2, ball3;
  function setup() {
   createCanvas(500, 400);
   ball1 = new Ball(200, 200, 50, 50, 5, 5, "red")
}

  function draw() { 
    //background(220);
    ball1.drawBall();   
}

function mousePressed() {
  console.log(123)
  fill("green")
  circle(100, 100, 50);
}

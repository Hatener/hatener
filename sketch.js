function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
let size;
function draw() {
  size = frameCount*(Math.PI/180);
  background(255);
  noFill();
  stroke(0, 100, 0);
  strokeWeight(4)
  rotateX(frameCount * 0.03);
  rotateY(Math.cos(size/2)*18);
  box(400+Math.cos(size*2)*200, 400+Math.sin(size*4)*200, 400);
  rotateX(frameCount * 0.06);
  box(100, 100, 100);

}

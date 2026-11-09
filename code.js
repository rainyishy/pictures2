var angle = 0;
var color = 255;


var slider;
function setup() {
  canvas = createCanvas(400,400);
  slider = createSlider(0 , TWO_PI, PI/4, 0.001);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(200, height);
  branch(100);
}

function branch(len) {
  //stroke(random(255),random(255),random(255));
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len*0.67 + 0.7);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67 + 0.7);
    pop();
  }
}

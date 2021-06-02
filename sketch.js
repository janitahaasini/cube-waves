var angle = 0;
var w = 24;
var ma;
var maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
 ma = atan(1 / sqrt(2));
 maxD = dist(0, 0, 200, 200)
}

function draw() {
  background(100);
ortho(-400, 400, 400, -400, 0, 1000);
directionalLight(255,255,255,0,-1)
rotateY(ma);
 rotateX(-QUARTER_PI);
 

for (var z = 0; z <height; z += w){
  for (var x = 0; x < width; x += w){
  push();
  var d = dist(x, z, width / 2, height / 2);
  var offset = map(d,0, maxD, -PI, PI);
  var a = angle + offset;
  var h = floor(map(sin(a), -1, 1, 100, 300));
 translate(x - width / 2, 0, z - height / 2);
 normalMaterial();
 box(w - 2, h, w - 2);
 //rect(x - width / 2+w/2, 0, w - 2, h);
 pop();
  }
  
}
 
angle -=0.1;
}

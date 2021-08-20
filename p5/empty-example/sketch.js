var a1,a2,a3,f1,f2,f3,p1,p2,p3;
var signal = [];
var view = -400;
var x = 360;
var y = 0;
var sum = 0;
var total = 0;


function setup() {
  createCanvas(400, 400);
  strokeWeight(5);
  a1 = random(2);
  a2 = random(2);
  a3 = random(2);

  f1 = random(5);
  f2 = random(5);
  f3 = random(5);

  p1 = random(2);
  p2 = random(2);
  p3 = random(2);

  for (var j = 0; j < 3141; j ++) {
    signal[j] = a1 * sin(f1 * (j/100) + p1) +
                a2 * sin(f2 * (j/100) + p2) +
                a3 * sin(f3 * (j/100) + p3);
  }
}

var arcs = function(x , y) {
  ellipse(x, y, 10, 10);
}


var draw = function() {
  background(255,255,255);
  for(var j = 0; j < 400; j ++) {
    if(signal [j + view] !== undefined) {
      point (j, 200 - 50 * signal[j + view]);
    }
  }
// Makes the ellipse go up if pressed and dwon if not
  if(mouseIsPressed) {
    y -=5;
  } else{
    y += 5;
  }
// Check edges
  if (y > 400) {
    y = 400;
  } else if (y < 0) {
    y = 0;
  }

// Acurracy thing
  if (signal[x + view] !== undefined) {
    var dis = y - (200 - 50 * signal[x + view]);
    sum += (dis * dis);
    total ++;
    var acu = Math.sqrt(sum / total);
    console.log(acu);
  }
  view ++;
  arcs(x, y);
};

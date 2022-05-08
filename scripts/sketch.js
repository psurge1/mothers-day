var center;
var s = 0;
var flowers = [];
var flowerCount = randomBetweenRange(16, 64);
var brown = [58.8, 29.4, 0];
var red = [255, 0, 0], 
    green = [0, 255, 0], 
    blue = [0, 0, 255], 
    yellow = [255, 255, 0], 
    purple = [255, 0, 255], 
    orange = [255, 165, 0];
var petalColors = [red, green, blue, yellow, purple, orange];

function setup() {
  createCanvas(windowWidth, windowHeight);
  center = createVector(windowWidth/2, windowHeight/2);
  textAlign(CENTER);
  textSize(windowWidth/15);
  textStyle(BOLD);
  ellipseMode(CENTER);
  strokeWeight(0);
  for (let i = 0; i < flowerCount; i++) {
    let diameter = randomBetweenRange(10, 100);
    let c = petalColors[randomBetweenRange(petalColors.length-1)];
    flowers.push(new flower(
      randomBetweenRange(windowWidth), 
      randomBetweenRange(windowHeight), 
      diameter, 
      diameter, 
      randomBetweenRange(4, 32), 
      brown,
      c
      ));
  }
}

function randomBetweenRange(max, min=0)
{
  return Math.floor(Math.random()*(max+1-min)+min);
}

// function randomizeColor(colorRGB, factor) {
//   if (Math.floor(Math.random()*10)%2==0) {
//     return tint(colorRGB, factor);
//   }
//   else {
//     return shade(colorRGB, factor);
//   }
// }

// function tint(colorRGB, factor)
// {
//   console.log('tint')
//   return [1/4*factor*(255-colorRGB[0]), 1/3*factor*(255-colorRGB[1]), 3/4*factor*(255-colorRGB[2])];
// }

// function shade(colorRGB, factor)
// {
//   console.log('shade')
//   return [1/4*factor*colorRGB[0], 1/3*factor*colorRGB[1], 3/4*factor*colorRGB[2]];
// }

function draw() {
  background(154, 177, 6);
  
  for (let i = 0; i < flowers.length; i++)
  {
    flowers[i].draw();
  }

  ++s;
  push();
  fill(56, 88, 2);
  text("Happy Mother's Day Amma!", center.x, center.y);
  pop();
}
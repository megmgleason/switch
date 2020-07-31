// Name any p5.js functions we use in the global so Glitch can recognize them.

/* global createCanvas, background, loadImage,
image, color, noStroke, HSB, fill, ellipse, mouseX, mouseY, rect, width, height, colorMode,
text, stroke, line*/

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

// We'll use variables for most of our colors in this code-along.
let backgroundColor, color1, color2, red, blue, black, white, yellow, green, textColor, globalSaturation, globalBrightness;


function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  globalSaturation =80;
  globalBrightness =80;
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  
  // COLORS HERE
  dayMode();
  
  red = color(0, 80, 80)
  blue = color(200, 80, 80)
  color1 = red
  color2 = blue
  black = color(20)
  white  =color(95)
  
  yellow = color(60, 100, 100)
  green = color(90, 100, 100)
  
  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = white; // white
  textColor = black; // black

}

function draw() {
  background(backgroundColor);
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.
  
  fill(red);
  rect (0,0,200,200);
  fill(blue);
  rect (200, 200, 200, 200);
  fill(green);
  rect (0, 200, 200, 200);
  fill(yellow);
  rect (200, 0, 200, 200);
  
  //this should cause the squares to change saturation w height
if (mouseY > height/2){
  tintUpperSquares();
} else {
  tintLowerSquares();
}
  
      //Switches the color based on the x position

  if (mouseX > width/2){
   dayMode();
  } else {
    nightMode();
  }
  
  drawCenterLine();
  // The red and blue circles:
  fill(color1);
  ellipse(100, 200, 50);
  fill(color2);
  ellipse(300, 200, 50);

  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 50);
  text("Flip the switch", 20, 20);
}
function dayMode() {
  color1 = red;
  color2 = blue;
  backgroundColor = white; // white
  textColor = black; // black
}

function nightMode(){
  color1 = blue;
  color2 = red;
  backgroundColor = black;
  textColor = white;
}

//This should define the function for tinting lower sqaures
//Except I feel like there is an easier way to do this bc it's a lot of magic numbers
function tintLowerSquares (){
  red = color (0, 80, 80);
  yellow = color (60, 100, 100);
  green = color (120, 50, 100);
  blue = color (240, 50, 100);
}

function tintUpperSquares (){
  green = color (120, 100, 100);
  blue = color (240, 100, 100);
  red = color (0, 50 , 100);
  yellow = color (60, 50, 100);
}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width/2, 0, width/2, 400);
  noStroke();
}
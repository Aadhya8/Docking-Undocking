//defining variables
var iss,astronaut;
var bg,sleep,brush,gym,bath,eat,drink,move;
var edges;

function preload() {

  //loading images and animations

  bg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym=loadImage("gym1.png","gym2.png","gym11.png","gym12.png");
  bath=loadImage("bath1.png","bath2.png");
  eat=loadImage("eat1.png","eat2.png");
  drink=loadImage("drink1.png","drink2.png");
  move=loadImage("move.png","move1.png");

}

function setup() {
  createCanvas(800,400);

  //creating iss(International Space Station)
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(bg);

  //creating astronaut sprite
  astronaut = createSprite(300,230);
  astronaut.addImage("astronaut",sleep);
  astronaut.scale = 0.1;
  
  //creating edges
  edges = createEdgeSprites();

}

function draw() {

  background(255,255,255);  
 
  //colliding astronaut from edges
  astronaut.collide(edges);

  //changing astronaut's image to brushing
  if(keyDown(UP_ARROW)) {

    astronaut.addImage("astronaut",brush);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

  //changing astronaut's image to gymming
  if(keyDown(DOWN_ARROW)) {

    astronaut.addImage("astronaut",gym);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;    

  }

  //changing astronaut's image to bathing
  if(keyDown(LEFT_ARROW)) {

    astronaut.addImage("astronaut",bath);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

  //changing astronaut's image to eating
  if(keyDown(RIGHT_ARROW)) {

    astronaut.addImage("astronaut",eat);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

  //changing astronaut's image to drinking
  if(keyDown("d")) {

    astronaut.addImage("astronaut",drink);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

  //changing astronaut's image and making it move
  if(keyDown("m")) {

    astronaut.y = 350;
    astronaut.addImage("astronaut",move);
    astronaut.velocityX = -2;
    astronaut.velocityY = -2;

  }

  //obtaining output
  drawSprites();
  
  //showing text
  fill(255);
  textSize(25);
  text("INSTRUCTIONS:",500,90);
  textSize(20);
  text("Up Arrow = Brushing",500,130);
  text("Down Arrow = Gymming",500,150);
  text("Left Arrow = Bathing",500,170);
  text("Right Arrow = Eating",500,190);
  text("d key = Drinking",500,210);
  text("m key = Moving",500,230);

}
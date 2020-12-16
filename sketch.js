const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper,square,db;

function preload()
{
  image1 = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(400, 650, width, 10, {isStatic:true});
	World.add(world, ground);

  paper = new Paper(100, 630);

	rect1 = new Dustbin(690, 640, 100, 10);
	rect2 = new Dustbin(740, 595, 10, 100);
  rect3 = new Dustbin(635, 595, 10, 100);
  
  db = Bodies.rectangle(688, 590, 10, 10, {isStatic:true});
  World.add(world, db);

  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine);
  background("lightblue");

  imageMode(CENTER);
  fill("yellow");
  rect(ground.position.x, ground.position.y, width, 10);

  textSize(20);
  text(mouseX, 360, 50);
  text(mouseY, 440, 50);

  rect1.display();
  rect2.display();
  rect3.display();

  image(image1, db.position.x, db.position.y, 120, 120);

  paper.display();

  drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:105,y:-105});
  }
}
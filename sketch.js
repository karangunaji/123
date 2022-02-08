const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var   engine , world ;
 var ground ,groundImg, cannon , cannonImg  , Canon, Cannon;


function preload() {

  groundImg = loadImage("assets/ground.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

 
  ground = new Bodies.rectangle(400,400,200,200);
  World.add(world,ground)

  
 cannon = new Cannon(100,100,100,100);
  
 
}

function draw() {
  

  background(0)



push();
  imageMode(CENTER)
  image(groundImg,ground.position.x+380,ground.position.y-80,1580,800);
  pop();


 
  


 
 
}



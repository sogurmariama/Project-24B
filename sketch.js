
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ball,wall1,wall2,wall3,ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball=new paper(100,200,20);	//Create the Bodies Here.
	wall1=new trashbin(565,590,20,120);
	wall2=new trashbin(665,660,220,20);
	wall3=new trashbin(765,590,20,120);
	ground=new floor(400,680,800,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-85});
	}
}




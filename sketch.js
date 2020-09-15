
var ball,ball2,ball3,ball4,ball5;
var cop;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Bob(200,400,75);
	ball2 = new Bob(280,400,75);
	ball3 = new Bob(360,400,75);
	ball4 = new Bob(440,400,75);
	ball5 = new Bob(520,400,75);

	cop = new Roof(360,150,600,20);

	var options={
	bodyA: ball,
	bodyB: ball2,
	bodyC:ball3,
	bodyD:ball4,
	bodyF:ball5,
	body :cop,
	stiffness: 0.04,
	leghnt: 250
	}

	var chain = constraint.create(options);
	World.add(world,chain);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  cop.display();

  strokeWeight(3);
  line(ball.body.position.x,ball.body.position.y,cop.body.position.x,cop.body.position.y)
  
  drawSprites();
 
}




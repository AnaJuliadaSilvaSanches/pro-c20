
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var plane;
var circulo, retangulo, quadrado;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}
	plane = Bodies.rectangle(600,590,1200,2,plane_options);
	World.add(world,plane);

	var circulo_options={
		restitution:0.6,
		friction:0.01,
		frictionAir:0
	}
	circulo = Bodies.circle(100, 100, 100, circulo_options);
	World.add(world,circulo);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);

  Engine.update(engine);

  rect(plane.position.x,plane.position.y,1200,2);
  ellipse(circulo.position.x,circulo.position.y,100);

  drawSprites();
 
}




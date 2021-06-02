
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinline1
var dustbinline2;
var dustbinline3;
var dustbin;
var ground;
var paperObject;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
  
}


function draw() {
  background('white')
Text('ingridiants and recipe for cake',400,50)
Text('1) bread',400,80)
Text('2) cream',400,110)
Text('3) oven',400,140)
Text('stacking layers of bread and creaming it',400,180)
Text('then after baking it ready to eat!!!',400,220)

}


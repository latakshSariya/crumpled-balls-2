
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1 , ground;
var rect1 , rect2 , rect3;
var boximage;

function preload()
{
	boximage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new Paper(100 , height/2);
	ground = new Ground;
	rect1 = new Dust(600,555 , 150,20)
	rect2 = new Dust(530 , 515 , 20,100 );
	rect3 = new Dust(670 , 515 ,20 ,100)
}

function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	
	
	ground.display();
	rect1.display();
	rect2.display();
	rect3.display();
	paper1.display();
	image(boximage,600,465,200,200);
	
 
}


  function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-130});

	}
}


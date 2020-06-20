 var paper1,ground1;
 var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);
    
 
	engine = Engine.create();
	world = engine.world;
	
	ground1 = new Ground(650,690,width,30);
	paper1 = new paper(80,300,1);
	dustbin1 = new dustbins(1100,680,150,20);
	dustbin2 = new dustbins(1185,639,20,80);
	dustbin3 = new dustbins(1015,639,20,80);
    

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:+1,y:-1});
		
	}
	
}




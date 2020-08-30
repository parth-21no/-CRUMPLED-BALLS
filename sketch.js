var paper,paper2;
var ground,basket1,basket2,basket3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1500, 500);
	rectMode(CENTER);

	paper = createSprite(730,400,20,20,10);
	paper.shapeColor=color("blue");

	paper2 = createSprite(1100,370,20,20,10);
	paper2.shapeColor=color("blue");

	groundSprite=createSprite(750, 450, 1500,10);
	groundSprite.shapeColor=color(255)

	basket1 = createSprite(1100,400,400,10);
	basket1.shapeColor=color("red");

	basket2 = createSprite(900,350,10,100);
	basket2.shapeColor=color("red");

	basket3 = createSprite(1300,350,10,100);
	basket3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
    basket3 = Bodies.rectangle(width/2, 800, width, 10 , {isStatic:true} );
	 World.add(world, basket3);
	
	 basket1 = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
	 World.add(world, basket1);

	 basket2 = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
	 World.add(world, basket2);

	 paper = Bodies.circle(450,1100,10,{isStatic:true});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	paper.velocity = 5;
  }
}






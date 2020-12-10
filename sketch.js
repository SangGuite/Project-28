
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeIMG,groundObject,stoneObject,chain;
var mango1,mango2,mango3,mango4,mango5;
var boySprite,boyIMG;

function preload()
{
	boyIMG=loadImage("boy.png");
	treeIMG=loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boySprite=createSprite(200, 550, 10,10);
	boySprite.addImage(boyIMG);
	boySprite.scale=0.08;
	groundObject=new Ground(400,600,800,20);
	stoneObject=new Stone(235,420,30);
	chain=new Chain(stoneObject.body,{x:150,y:500});
	mango1=new Mango(590,200,30);
	mango2=new Mango(570,300,30);
	mango3=new Mango(610,260,30);
	mango4=new Mango(680,280,30);
	mango5=new Mango(650,250,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
  groundObject.display();
  imageMode(CENTER); 
  image(treeIMG,600,360,250,500);
  stoneObject.display();
  chain.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango2);
  detectCollision(stoneObject,mango3);
  detectCollision(stoneObject,mango4);
  detectCollision(stoneObject,mango5);
  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(stoneObject.body,{x:mouseX, y:mouseY});
}

function mouseReleased() {
    chain.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		chain.attach(stoneObject.body);
	}
}



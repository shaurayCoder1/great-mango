
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;
var boy,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10
var tree,treeimg,boyimg,ground

	function preload() {
		treeimg = loadImage("images/tree.png");
		boyImg = loadImage("images/boy.png");
	}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,height,1200,20);
stone=new Stone(100,460,23);
mango1= new Mango(600,290,34);
mango2= new Mango(855,325,15);
mango3= new Mango(670,260,35);
mango4= new Mango(730,200,35);
mango5= new Mango(710,320.34);
mango6= new Mango(780,250,35);
mango7= new Mango(825,170,35);
mango8= new Mango(880,260,35);
mango9= new Mango(940,220.35);
mango10= new Mango(380,305,35);
attach = new Throw(stones.body,{x:100,y:455});
tree = createSprite(775,368)
tree.addImage("tree.png")
tree.scale=0.125

boy = createSprite(140,50)
boy.addImage("boy.png")
boy.scale=0.125

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
 
detectCollision(stone,mango1)
detectCollision(stone,mango2)
detectCollision(stone,mango3)
detectCollision(stone,mango4)
detectCollision(stone,mango5)
detectCollision(stone,mango6)
detectCollision(stone,mango7)
detectCollision(stone,mango8)
detectCollision(stone,mango9)
detectCollision(stone,mango10)
stones.display()
mango1.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()
mango8.display()
mango9.display()
mango10.display()
ground.display();
}


function detectCollision(lmango,lstone){
mangoBodyPosition=lmango.body.postition
stoneBodyPosition=lstone.body.postition


var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
				if(dist<=lmango.r+lstone.r){

				}
				Matter.body.setStaic(lmango.body,false)
}
function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}   

function mouseReleased(){
	attach.fly();
}







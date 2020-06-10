const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1300, 500);
	engine = Engine.create();
	world = engine.world;
    
	block = new Block(100, height-30, 55, 55);
	slingShot = new Slingshot(block.body,{x: 200, y:100});

	ground1 = new Ground(790, 340, 180, 20);
	ground2 = new Ground(650, 490, 1300, 20);
	ground3 = new Ground(1290, 240, 20, 480);
	
	box1 = new Box(730, 235, 30, 40);
	box2 = new Box(760, 235, 30, 40);
	box3 = new Box(790, 235, 30, 40);
	box4 = new Box(820, 235, 30, 40);
	box5 = new Box(850, 235, 30, 40);
	
	box6 = new Box(760, 195, 30, 40);
	box7 = new Box(790, 195, 30, 40);
	box8 = new Box(820, 195, 30, 40);

	box9 = new Box(790, 155, 30, 40);
    
	Engine.run(engine);
}

function draw() {
	
	Engine.update(engine);
	background(151, 158, 160);
    
	block.display();
	slingShot.display();

	ground1.display();
	ground2.display();
	ground3.display();

	fill("pink");
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();

	fill("yellow");
	box6.display();
	box7.display();
	box8.display();

	fill("blue");
	box9.display();
}

function mouseDragged(){
    Matter.Body.setPosition(block.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(block.body);
    }
}





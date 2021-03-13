const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var stone1, hammer1, rubber1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stone1 = new stone(700,320,70,70);
    hammer1 = new hammer (920,320,70,70);
    rubber1 = new rubber (810,350, 70,70);

}

function draw(){
    background(135,206,235);
    Engine.update(engine);



    stone1.display();
    hammer1.display();
    rubber1.display();
}






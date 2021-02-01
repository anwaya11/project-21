var canvas;
var music;
var box1;
var background;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

  box1 = createSprite(100,586,195,23);
  box1.shapeColor="yellow";

  box2 = createSprite(300,586,195,23);
  box2.shapeColor="red";

  box3 = createSprite(500,586,195,23);
  box3.shapeColor="Blue";

  box4 = createSprite(700,586,195,23);
  box4.shapeColor="pink";


    //create box sprite and give velocity

    square = createSprite(200,50,35,35);
    square.x=Math.round(random(101,500));

    square.velocityX=4;
    square.velocityY=6;
}

function draw() {
    background ("lightgreen");
    //create edgeSprite

    //music.stop();

    edges = createEdgeSprites();

    square.bounceOff(edges);

    if(box1.isTouching(square) && square.bounceOff(box1)){

     square.shapeColor="yellow";
     music.play();
    }
    if(box2.isTouching(square) && square.bounceOff(box2)){

    square.shapeColor="red";
    square.velocityX=0;
    square.velocityY=0;
    music.stop();

    }    
    if(box3.isTouching(square) && square.bounceOff(box3)){

    square.shapeColor="Blue";
    music.play();

    }
    if(box4.isTouching(square) && square.bounceOff(box4)){

    square.shapeColor="pink";
    music.play();

    }

    
drawSprites();
    //add condition to check if box touching surface and make it box
}

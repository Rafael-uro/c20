var gato, rato
var gatodeitado, gatoandando, gatosentado
var ratocomqueijo, ratochamando, ratocomlupa
var fundo
function preload() {
    //load the images here
    gatodeitado = loadAnimation("images/cat1.png");
    gatoandando = loadAnimation("images/cat2.png", "images/cat3.png");
    gatosentado = loadAnimation("images/cat4.png");
    ratocomqueijo = loadAnimation("images/mouse1.png");
    ratochamando = loadAnimation("images/mouse2.png", "images/mouse3.png");
    ratocomlupa = loadAnimation("images/mouse4.png");
    fundo = loadImage("images/garden.png")
}

function setup() {
    createCanvas(1000, 800);
    //create tom and jerry sprites here
    gato = createSprite(870, 600)
    gato.addAnimation("gato1", gatodeitado)
    gato.addAnimation("gato2", gatoandando)
    gato.addAnimation("gato3", gatosentado)
    gato.scale = 0.2

    rato = createSprite(230, 600)
    rato.addAnimation("rato1", ratocomqueijo)
    rato.addAnimation("rato2", ratochamando)
    rato.addAnimation("rato3", ratocomlupa)
    rato.scale = 0.2
}

function draw() {

    background(fundo);
    //Write condition here to evalute if tom and jerry collide
    gato.debug = true
    rato.debug = true
    gato.setCollider("circle",0,0,40)
    rato.setCollider("rectangle",0,0,700,400)
    if( gato.isTouching (rato)){
        gato.addAnimation("gatosentado",gatosentado)
        gato.changeAnimation("gatosentado")
        rato.addAnimation("ratocomlupa",ratocomlupa)
        rato.changeAnimation("ratocomlupa")
        gato.velocityX = 0

    }
    
    drawSprites();
}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        rato.addAnimation("ratoProvocando", ratochamando)
        rato.changeAnimation("ratoProvocando")
        rato.frameDelay = 25

        gato.velocityX = -5
        gato.addAnimation("gatoandando1", gatoandando)
        gato.changeAnimation("gatoandando1")
        gato.frameDelay = 10


    }

    //For moving and changing animation write code here


}

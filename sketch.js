//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOp = 585;
let yRaqueteOp = 150;

//velocidade da bolinha
let velocidadeXB = 6;
let velocidadeYB = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar do jogo
let meusPontos = 0;
let pontosDoOp = 0;


let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
    background(120);
    showBolinha();
    moveBolinha();
    ColisaoBorda();
    showRaquete(xRaquete, yRaquete);
    moveRaquete();
    ColisaoRaquete(xRaquete, yRaquete);
    ColisaoRaquete(xRaqueteOp, yRaqueteOp);
    showRaquete(xRaqueteOp, yRaqueteOp);
    moveRaqueteOp();
    incluiPlacar() 
    marcaPonto();
}
function showBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function moveBolinha() {
  xBolinha += velocidadeXB;
  yBolinha += velocidadeYB;
}

function ColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXB *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYB *= -1;
  }
}

function showRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function moveRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function ColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function ColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXB *= -1;
  }
}

function moveRaqueteOp() {
    velocidadeYOponente = yBolinha - yRaqueteOp - raqueteComprimento / 2 - 30;
    yRaqueteOp += velocidadeYOponente
}


function incluiPlacar(){
  stroke(255)
    textAlign(CENTER);
    textSize(15);
    fill(color(10,140, 0));
    rect(150, 10, 40, 20);
    fill(0);
    text(meusPontos, 170, 26);
    fill(color(10,140, 0));
    rect(450, 10, 40, 20);
    fill(0);
    text(pontosDoOp, 470, 26);
}


function marcaPonto() {
  if (xBolinha > 580) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosDoOp += 1;
  }
}


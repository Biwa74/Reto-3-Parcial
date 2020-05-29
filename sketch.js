var sol;
var mercurio;
var venus;
var tierra;
var luna;
var slider;
var coin;
var a=0;
var b=0;
var c=0;
var d=0;

function preload(){
  coin=loadSound("coin.mp3");
}

function setup() {
  createCanvas(500, 500);
  sol=new Planeta();
  mercurio=new Mercurio();
  venus=new Venus();
  tierra=new Tierra();
  marte=new Marte();
  luna=new Luna();
  angleMode(DEGREES);
  slider=createSlider(0,10,1,1);
}

function draw() {
  background(0);
  sol.mostrar(slider.value());
  mercurio.mostrar(slider.value());
  venus.mostrar(slider.value());
  tierra.mostrar(slider.value());
  marte.mostrar(slider.value());
  luna.mostrar(tierra.x,tierra.y,tierra.trans);
  
  mercurio.vuelta(a);
  venus.vuelta(b);
  tierra.vuelta(c);
  marte.vuelta(d);
  fill(color(255, 0, 0));
  textSize(18);
  text("Mercurio:"+mercurio.cont,10,450);
  text("Venus:"+venus.cont,130,450);
  text("Tierra:"+tierra.cont,230,450);
  text("Marte:"+marte.cont,330,450);
}
